import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { ToDoListModel } from '@to-do-list/model/to-do-list.model';
import { ToDoListService } from '@to-do-list/service/to-do-list.service';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { ToastrService } from 'ngx-toastr';
import { addData, updateData } from 'src/app/state/to-do.action';
import { ToDoState } from 'src/app/state/to-do.state';

@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.scss'],
})
export class AddUpdateUserComponent implements OnInit {
  addUpdateForm!: FormGroup;
  title: string = 'Add User';
  // imgStr!: any;
  toDoList: any = {};

  constructor(
    public dialogRef: MatDialogRef<AddUpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ToDoListModel,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private todoListService: ToDoListService
  ) {}

  ngOnInit(): void {
    this.createForm();
    if (this.data) {
      this.title = 'Update User';
      this.addUpdateForm.patchValue(this.data)
    }
  }

  createForm() {
    this.addUpdateForm = this.fb.group({
      id: [null],
      FirstName: [null, Validators.required],
      LastName: [null, Validators.required],
      UserName: [null, Validators.required],
      Email: [null, [Validators.required, Validators.email]],
      PhoneNumber: [null, Validators.required],
      Address: [null, Validators.required],
      CreatedAt: [null],
      UpdatedAt: [null],
    });
  }

  addUpdateUser() {
    debugger
    if (this.addUpdateForm.invalid) {
      return;
    }

    let date = new Date();

    this.toDoList = Object.assign(this.toDoList, this.addUpdateForm.value);
    if(!this.toDoList.id){
      this.toDoList.CreatedAt = date.toISOString();
      this.toDoList.UpdatedAt = this.toDoList.CreatedAt;

      delete this.toDoList.id;
      console.log(this.toDoList)
      this.todoListService.addUser(this.toDoList).subscribe((res)=>{
        if(res){
          this.dialogRef.close(true)
        }else{
          this.toastr.error('Error in Adding User', 'Error!')
        }
      })

    }else{
      this.toDoList.UpdatedAt = date.toISOString();
      this.toDoList.id = Number(this.toDoList.id);
      this.todoListService.updateUser(this.toDoList).subscribe((res)=>{
        if(res){
          this.dialogRef.close(true)
        }else{
          this.toastr.error('Error in Adding User', 'Error!')
        }
      })
    }
    


  }

  close(res: any){
    this.dialogRef.close(res)
  }
}
