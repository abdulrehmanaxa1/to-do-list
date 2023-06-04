import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { ToDoReducer } from './state/to-do.reducer';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';

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
      { name: 'CreatedAt', keypath: 'CreatedAt', options: { unique: false } },
      { name: 'UpdatedAt', keypath: 'UpdatedAt', options: { unique: false } }
    ]
  }]

};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    StoreModule.forRoot({ todoList: ToDoReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
