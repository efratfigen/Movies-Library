import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ItemsViewComponent} from './items-view/items-view.component';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ItemCardViewComponent} from './item-card-view/item-card-view.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    ItemsViewComponent,
    ItemCardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [
    MatSnackBarModule
  ],
  providers: [],
  entryComponents: [
    ItemCardViewComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

