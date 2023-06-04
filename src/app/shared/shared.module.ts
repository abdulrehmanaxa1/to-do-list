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
import { NgxIndexedDBModule } from 'ngx-indexed-db';



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
    NgxIndexedDBModule
  ],
  exports:[
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
    MatSliderModule,
    MatSlideToggleModule,
    MatDialogModule,
    NgxIndexedDBModule
  ]
})
export class SharedModule { }
