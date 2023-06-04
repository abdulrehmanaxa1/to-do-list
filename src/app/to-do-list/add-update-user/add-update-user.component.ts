import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ToDoListModel } from '@to-do-list/model/to-do-list.model';
import { ToDoService } from '@to-do-list/service/to-do.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.scss'],
})
export class AddUpdateUserComponent implements OnInit {
  addUpdateForm!: FormGroup;
  title: string = 'Add User';
  // imgStr!: any;
  toDoList!: ToDoListModel;

  constructor(
    public dialogRef: MatDialogRef<AddUpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ToDoListModel,
    private todoService: ToDoService,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.createForm();
    if (this.data) {
      this.title = 'Update User';
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
    });
  }

  addUpdateUser() {
    if (this.addUpdateForm.invalid) {
      return;
    }

    let date = new Date();

    this.toDoList = Object.assign(this.toDoList, this.addUpdateForm.value());
    if(!this.toDoList.id){
      this.toDoList.CreatedAt = date.toISOString();
    }
    this.toDoList.UpdatedAt = date.toISOString();
  }

  close(res: any){
    this.dialogRef.close(res)
  }
}
