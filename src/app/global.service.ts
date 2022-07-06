import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ItemParams} from './item.model';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  public itemsListMap = {data: {}};
  public itemsTypes = {data: []};
  private itemsList: ItemParams[];
  public gridView = {data: false};

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar) {
  }


  public getItemsListMap(): any {
    return this.itemsListMap;
  }
  public getItemsTypes(): any {
    return this.itemsTypes;
  }

  public getGridView(): object {
    return this.gridView;
  }

  public setGridView(): void {
    this.gridView.data = !this.gridView.data;
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/response.json')
      .pipe(map((data: any) => {
          this.itemsList = data.results;
          this.handleItemsList();
        }),
        catchError(err => {
          const message = 'There is an error fetching the data';
          this.snackBar.open(message, '', {
            duration: 3500,
            panelClass: 'snack-failed',
          });
          throw new Error('error fetching items data');
      }));
  }

  public updateData(item): Observable<ItemParams> {
    return this.http.put('./assets/response.json', item)
      .pipe(
        map((data) => {
          return data;
          const message = 'The Item' + item.Title + 'saved successfully';
          this.snackBar.open(message, '', {
            duration: 3500,
            panelClass: 'snack-failed',
          });
        }),
        catchError(err => {
          const message = 'There is an error saving the item' + item.Title;
          this.snackBar.open(message, '', {
            duration: 3500,
            panelClass: 'snack-failed',
          });
          throw new Error('error saving item');
        })
      );
  }

  public handleItemsList(): void {
    this.itemsListMap.data = [];
    this.itemsTypes.data = [];
    this.itemsList.forEach(item => {
      const typeKey = item.Type;
      if (!this.itemsListMap.data[typeKey]) {
        this.itemsListMap.data[typeKey] = [];
        this.itemsTypes.data.push(typeKey);
      }

      this.itemsListMap.data[typeKey].push({
        Title: item.Title,
        Year: item.Year.slice(0, 4),
        Poster: item.Poster,
        imdbID: item.imdbID
      });
    });
  }
}
