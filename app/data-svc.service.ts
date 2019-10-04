import { Injectable } from '@angular/core';

@Injectable()
export class DataSvcService {

  constructor() { }


  getVirtualData(grid) {
  	var arr = grid.collectionView.sourceCollection,
    	  vr = grid.viewRange,
        start = vr.topRow,
        end = vr.bottomRow,
        loaded = false;

		// load data for any null items in the view range
    for (var i = start; i <= end; i++) {
    	if (arr[i] == null) {
      	arr[i] = {
        	id: i,
          name: 'Customer ' + i,
          date: new Date(2018, 0, i),
          amount: Math.random() * 1000
				}
        loaded = true;
			}
		}
  }

  getStudentsData(count):any[]{
    var data=[];
    for(var i=0;i<count;i++){
      data.push({
        name:"name"+i,
        hindi:Math.floor(Math.random()*100),
        english:Math.floor(Math.random()*100),
        maths:Math.floor(Math.random()*100),
      });
    }
    return data;

  }

  getData(count): any[] {
        // create some random data
        var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
            data = [];
        for (var i = 0; i < count; i++) {
            data.push({
                id: i,
                date: new Date(2015, i % 12, (i + 1) % 25),
                time: new Date(2015, i % 12, (i + 1) % 25, i % 24, i % 60, i % 60),
                country: countries[i % countries.length],
                countryMapped: i % countries.length,
                downloads: Math.round(Math.random() * 20000),
                sales: Math.random() * 10000,
                expenses: Math.random() * 5000,
                checked: Boolean(Math.floor(Math.random()+0.5))
            });
        }
        return data;
    }

    getTreeData(): [{}] {
        return [
            {
                name: '\u266B Adriane Simione', items: [
                    {
                        name: '\u266A Intelligible Sky', items: [
                            { name: 'Theories', length: '2:02' },
                            { name: 'Giant Eyes', length: '3:29' },
                            { name: 'Jovian Moons', length: '1:02' },
                            { name: 'Open Minds', length: '2:41' },
                            { name: 'Spacetronic Eyes', length: '3:41' }]
                    }
                ]
            },
            {
                name: '\u266B Amy Winehouse', items: [
                    {
                        name: '\u266A Back to Black', items: [
                            { name: 'Addicted', length: '1:34' },
                            { name: 'He Can Only Hold Her', length: '2:22' },
                            { name: 'Some Unholy War', length: '2:21' },
                            { name: 'Wake Up Alone', length: '3:43' },
                            { name: 'Tears Dry On Their Own', length: '1:25' }]
                    },
                    {
                        name: '\u266A Live in Paradiso', items: [
                            { name: "You Know That I'm No Good", length: '2:32' },
                            { name: 'Wake Up Alone', length: '1:04' },
                            { name: 'Valerie', length: '1:22' },
                            { name: 'Tears Dry On Their Own', length: '3:15' },
                            { name: 'Rehab', length: '3:40' }]
                    }]
            },
            {
                name: '\u266B Black Sabbath', items: [
                    {
                        name: '\u266A Heaven and Hell', items: [
                            { name: 'Neon Knights', length: '3:03' },
                            { name: 'Children of the Sea', length: '2:54' },
                            { name: 'Lady Evil', length: '1:43' },
                            { name: 'Heaven and Hell', length: '2:23' },
                            { name: 'Wishing Well', length: '3:22' },
                            { name: 'Die Young', length: '2:21' }]
                    },
                    {
                        name: '\u266A Never Say Die!', items: [
                            { name: 'Swinging The Chain', length: '4:32' },
                            { name: 'Breakout', length: '3:54' },
                            { name: 'Over To You', length: '2:43' },
                            { name: 'Air Dance', length: '1:34' },
                            { name: 'Johnny Blade', length: '1:02' },
                            { name: 'Never Say Die', length: '2:11' }]
                    },
                    {
                        name: '\u266A Paranoid', items: [
                            { name: 'Rat Salad', length: '3:44' },
                            { name: 'Hand Of Doom', length: '4:21' },
                            { name: 'Electric Funeral', length: '2:12' },
                            { name: 'Iron Man', length: '3:22' },
                            { name: 'War Pigs', length: '3:13' }]
                    }]
            },
            {
                name: '\u266B Brand X', items: [
                    {
                        name: '\u266A Unorthodox Behaviour', items: [
                            { name: 'Touch Wood', length: '2:54' },
                            { name: 'Running of Three', length: '1:34' },
                            { name: 'Unorthodox Behaviour', length: '2:23' },
                            { name: 'Smacks of Euphoric Hysteria', length: '3:12' },
                            { name: 'Euthanasia Waltz', length: '2:22' },
                            { name: 'Nuclear Burn', length: '4:01' }]
                    }]
            }
        ];
    }


    getCountryMap(): { name: string, key: number }[] {
        return [
            { name: 'US', key: 0 },
            { name: 'Germany', key: 1 },
            { name: 'UK', key: 2 },
            { name: 'Japan', key: 3 },
            { name: 'Italy', key: 4 },
            { name: 'Greece', key: 5 }
        ];
    }
}