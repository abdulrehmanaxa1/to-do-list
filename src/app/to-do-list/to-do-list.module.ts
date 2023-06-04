import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { ToDoListComponent } from './to-do-list.component';
import { AddUpdateUserComponent } from './add-update-user/add-update-user.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ToDoListComponent,
    AddUpdateUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ToDoListRoutingModule
  ]
})
export class ToDoListModule { }
