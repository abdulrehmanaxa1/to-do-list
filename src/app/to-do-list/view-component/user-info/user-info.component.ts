import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInfo } from '@to-do-list/model/to-do-list.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  userInfoForm!: FormGroup;
  @Input() userInfo!: UserInfo;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.userInfoForm.patchValue(this.userInfo);
  }

  createForm() {
    this.userInfoForm = this.fb.group({
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

}
