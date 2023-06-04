import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddUpdateUserComponent } from './add-update-user/add-update-user.component';
import { MatTableDataSource } from '@angular/material/table';
import { ToDoListModel } from './model/to-do-list.model';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { ToDoListService } from './service/to-do-list.service';

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
    private todoService: ToDoListService,
    private fb: FormBuilder
    ){}

  ngOnInit(): void {
    this.createForm();
    this.getData();
  }

  createForm(){
    this.listForm = this.fb.group({
      Email: [null, Validators.email]
    })
  }

  getData(){
    this.todoService.getUsers().subscribe((res)=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
    })
  }

  addUserUpdateDialog(user=null){
  
    const dialogRef = this.dialog.open(AddUpdateUserComponent, {data: user, width: '400px',height: '600px'})

    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.getData();
      }
    })
  }
}
