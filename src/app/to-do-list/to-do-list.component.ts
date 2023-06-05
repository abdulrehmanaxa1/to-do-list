import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddUpdateUserComponent } from './add-update-user/add-update-user.component';
import { MatTableDataSource } from '@angular/material/table';
import { ToDoListModel } from './model/to-do-list.model';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { ToDoListService } from './service/to-do-list.service';
import { ToastrService } from 'ngx-toastr';
import { ViewComponentComponent } from './view-component/view-component.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit{

  listForm !: FormGroup;
  toDoList!: ToDoListModel[];

  displayedColumns = ['first', 'last','user', 'email', 'phone', 'address', 'actions'];

  dataSource !: MatTableDataSource<ToDoListModel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(
    private dialog: MatDialog,
    private todoService: ToDoListService,
    private fb: FormBuilder,
    private toastr: ToastrService,
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
    let email = this.listForm.controls['Email'].value
    if(!email){
      this.todoService.getUsers().subscribe((res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      })
    }else{
      this.todoService.getDataByEmail(email).subscribe((res)=>{
        this.toDoList = res;
        console.log(res);
        this.dataSource = new MatTableDataSource(this.toDoList);
        this.dataSource.paginator = this?.paginator;
      })
      this.listForm.markAsUntouched();
      this.listForm.markAsPristine();
    }
  
  }

  addUserUpdateDialog(user=null){
  
    const dialogRef = this.dialog.open(AddUpdateUserComponent, {data: user, width: '400px',height: '600px'})

    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.getData();
      }
    })
  }

  viewData(user: ToDoListModel){
    const dialogRef = this.dialog.open(ViewComponentComponent, {data: user, width: '400px',height: '600px'})
  }

  deleteData(user: ToDoListModel){
    this.todoService.deleteUser(Number(user.id)).subscribe(()=>{
      this.toastr.success('User Deleted Successfully!', 'Success!');
      this.getData()
    },
    error =>{ this.toastr.error(error, 'Error!')}
    )
  }

}
