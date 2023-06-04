import { Injectable } from '@angular/core';
import { ToDoListModel } from '@to-do-list/model/to-do-list.model';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  private readonly storeName = 'users';

  constructor(private dbService: NgxIndexedDBService) { }

  getUsers(): Observable<ToDoListModel[]> {
    return this.dbService.getAll(this.storeName);
  }

  addUser(user: ToDoListModel): Observable<any> {
    return this.dbService.add(this.storeName, user);
  }

  updateUser(user: ToDoListModel): Observable<any> {
    return this.dbService.update(this.storeName, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.dbService.delete(this.storeName, id);
  }

}
