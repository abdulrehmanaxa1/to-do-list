import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { ToDoListComponent } from './to-do-list.component';
import { AddUpdateUserComponent } from './add-update-user/add-update-user.component';
import { SharedModule } from '@shared/shared.module';
import { ViewComponentComponent } from './view-component/view-component.component';
import { UserInfoComponent } from './view-component/user-info/user-info.component';
import { HistoryComponent } from './view-component/history/history.component';


@NgModule({
  declarations: [
    ToDoListComponent,
    AddUpdateUserComponent,
    ViewComponentComponent,
    UserInfoComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ToDoListRoutingModule
  ]
})
export class ToDoListModule { }
