import {Component, OnInit} from '@angular/core';
import {GlobalService} from './global.service';
import {ItemParams, ITEM_TYPE} from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public itemsListMap: any = {};
  public itemsTypes: any = {};
  public gridView: any = {};

  constructor(private globalService: GlobalService) {
    this.itemsListMap = globalService.getItemsListMap();
    this.itemsTypes = globalService.getItemsTypes();
    this.gridView = globalService.getGridView();
  }

  ngOnInit(): void {
    this.getItemsListData();
  }

  public getItemsListData(): any {
    this.globalService.getJSON().subscribe(data => {});
  }

  public changeView(): void{
    this.globalService.setGridView();
  }


}
