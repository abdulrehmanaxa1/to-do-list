import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoListModel } from '@to-do-list/model/to-do-list.model';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor() { }

  addUpdateUser(userData: ToDoListModel){
    
  }
}
