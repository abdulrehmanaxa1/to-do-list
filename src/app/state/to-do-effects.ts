import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ToDoActions from './to-do.action';
import { ToDoListService } from '@to-do-list/service/to-do-list.service';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private todoListService: ToDoListService) {}

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToDoActions.loadData),
      switchMap(() =>
        this.todoListService.getUsers().pipe(
          map((data) => ToDoActions.loadDataSuccess({ data })),
          catchError((error) => of(ToDoActions.loadDataFailure({ error })))
        )
      )
    )
  );

  addData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToDoActions.addData),
      switchMap(({ item }) =>
        this.todoListService.addUser(item).pipe(
          map(() => ToDoActions.addDataSuccess()),
          catchError((error) => of(ToDoActions.addDataFailure({ error })))
        )
      )
    )
  );

  updateData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToDoActions.updateData),
      switchMap(({ item }) =>
        this.todoListService.updateUser(item).pipe(
          map(() => ToDoActions.updateDataSuccess()),
          catchError((error) => of(ToDoActions.updateDataFailure({ error })))
        )
      )
    )
  );

  deleteData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToDoActions.deleteData),
      switchMap(({ id }) =>
        this.todoListService.deleteUser(id).pipe(
          map(() => ToDoActions.deleteDataSuccess()),
          catchError((error) => of(ToDoActions.deleteDataFailure({ error })))
        )
      )
    )
  );
}