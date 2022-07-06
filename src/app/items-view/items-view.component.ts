import {Component, Input, OnInit} from '@angular/core';
import {GlobalService} from '../global.service';
import {ITEM_TYPE} from '../item.model';
import {ItemCardViewComponent} from '../item-card-view/item-card-view.component';
import {MatDialog, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-items-view',
  templateUrl: './items-view.component.html',
  styleUrls: ['./items-view.component.scss']
})
export class ItemsViewComponent implements OnInit{
  @Input() public itemsType: ITEM_TYPE;
  public itemsListMap: any = {};
  public itemsListLocal: any = {};
  public itemsListFilter = {data: []} ;
  public gridView: any = {};
  public sortTypeAsc;



  constructor(private globalService: GlobalService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.itemsListMap = this.globalService.getItemsListMap();
    this.itemsListLocal = this.itemsListMap.data[this.itemsType];
    this.gridView = this.globalService.getGridView();
    this.itemsListFilter.data = Object.assign([], this.itemsListLocal);
    this.sortArray(true);
  }

  public sortArray(sortTypeAsc): void{
    this.itemsListFilter.data.sort(function (a, b){
      const returnObj =  sortTypeAsc ? a.Title.localeCompare(b.Title) : b.Title.localeCompare(a.Title);
      return returnObj;
    });
    this.sortTypeAsc = !this.sortTypeAsc;
  }

  public changeItemTitleValue(item, e): void {
    if (item.Title !== e.target.value) {
      this.globalService.updateData(item).subscribe(data => {});
    }
  }

  public searchItemsKeyUp(value): any {
    if (this.itemsListLocal) {

      const text = value.toLocaleLowerCase();
      this.itemsListFilter.data = this.itemsListLocal.filter(item => {
        return item.Title.toLocaleLowerCase().indexOf(text) >= 0 ||  item.Year.toLocaleLowerCase().indexOf(text) >= 0;
      });
    }
  }

  public refreshItemsData(): void{
    this.globalService.getJSON().subscribe(data => {
      this.itemsListLocal = this.itemsListMap.data[this.itemsType];
      this.itemsListFilter.data = Object.assign([], this.itemsListLocal);
      this.sortArray(true);
      const message = 'Bringing the data has been successful';
      this.snackBar.open(message, '', {
        duration: 3500,
        panelClass: 'snack-failed',
      });
    });

  }

  public openItemView(item): void {
    this.dialog.open(ItemCardViewComponent, {data: item});
  }


}

