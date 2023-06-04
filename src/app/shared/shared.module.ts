import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCommonModule} from "@angular/material/core";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {NgxSpinnerModule} from "ngx-spinner";
import {ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";
import {MatTreeModule} from "@angular/material/tree";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {MatInputModule} from "@angular/material/input";
import {MatSliderModule} from "@angular/material/slider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatDialogModule} from "@angular/material/dialog";
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import {MatPaginatorModule} from '@angular/material/paginator';

const dbConfig : DBConfig = {
  name: 'todoListDB',
  version: 1,
  objectStoresMeta: [{
    store: 'users',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'FirstName', keypath: 'FirstName', options: { unique: false } },
      { name: 'LastName', keypath: 'LastName', options: { unique: false } },
      { name: 'UserName', keypath: 'UserName', options: { unique: true } },
      { name: 'Email', keypath: 'Email', options: { unique: true } },
      { name: 'PhoneNumber', keypath: 'PhoneNumber', options: { unique: false } },
      { name: 'Address', keypath: 'Address', options: { unique: false } },
      { name: 'Image', keypath: 'Image', options: { unique: false } },
    ]
  }]

};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCommonModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatMenuModule,
    MatTreeModule,
    MatBottomSheetModule,
    MatListModule,
    MatExpansionModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    MatInputModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatDialogModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    MatPaginatorModule
  ],
  exports:[
    MatCommonModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatMenuModule,
    MatTreeModule,
    MatBottomSheetModule,
    MatListModule,
    MatExpansionModule,
    HttpClientModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatDialogModule,
    NgxIndexedDBModule,
    MatPaginatorModule
  ]
})
export class SharedModule { }
