import { Component } from '@angular/core';
import { DataSvcService } from "./data-svc.service";

import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  data:wjcCore.CollectionView;
  htInfo:wjcGrid.HitTestInfo;

  constructor(private dataSvc:DataSvcService){
    this.data=dataSvc.getData(50);
  }

  init(grid:wjcGrid.FlexGrid){
    let gr=new wjcGrid.GroupRow();
    grid.columnFooters.rows.push(gr);
    grid.columns.forEach(col=>{
      col.aggregate=wjcCore.Aggregate.Sum;
    });
  }

  gridClickHandler(e:MouseEvent,grid:wjcGrid.FlexGrid){
    var htInfo=grid.hitTest(e);
    this.updateInfo(htInfo);
  }

  updateInfo(htInfo:wjcGrid.HitTestInfo){
      this.htInfo=htInfo;
  }

  getCellType(agg:number){ 
    return wjcGrid.CellType[agg];
  }

}
