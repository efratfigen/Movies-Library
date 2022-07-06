import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {ItemParams} from '../item.model';

@Component({
  selector: 'app-item-card-view',
  templateUrl: './item-card-view.component.html',
  styleUrls: ['./item-card-view.component.scss']
})
export class ItemCardViewComponent{

  constructor(@Inject(MAT_DIALOG_DATA) public data: ItemParams) {
  }
}
