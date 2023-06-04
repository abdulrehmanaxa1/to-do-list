import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUpdateUserComponent } from './add-update-user/add-update-user.component';
import { MatTableDataSource } from '@angular/material/table';
import { ToDoListModel } from './model/to-do-list.model';
import { ToDoService } from './service/to-do.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit{

  listForm !: FormGroup;

  displayedColumns = ['first', 'last','user', 'email', 'phone', 'address', 'actions'];

  dataSource !: MatTableDataSource<ToDoListModel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(
    private dialog: MatDialog,
    private todoService: ToDoService,
    private fb: FormBuilder
    ){}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.listForm = this.fb.group({
      email: [null, Validators.email]
    })
  }

  getData(){}

  addUserDialog(){
    this.dialog.open(AddUpdateUserComponent)
  }
}
