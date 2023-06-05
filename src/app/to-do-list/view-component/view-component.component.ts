import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToDoListModel, UserInfo } from '@to-do-list/model/to-do-list.model';
import { ToDoListService } from '@to-do-list/service/to-do-list.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.scss']
})
export class ViewComponentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ToDoListModel,
  ) {}

  ngOnInit(): void {
    
  }

  close(res: any){
    this.dialogRef.close(res)
  }
}