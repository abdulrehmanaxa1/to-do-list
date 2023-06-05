import { createAction, props } from '@ngrx/store';
import { ToDoListModel } from '@to-do-list/model/to-do-list.model';

// Load data from IndexedDB
export const loadData = createAction('Load Data');
export const loadDataSuccess = createAction('Load Data Success', props<{ data: ToDoListModel[] }>());
export const loadDataFailure = createAction('Load Data Failure', props<{ error: any }>());

// Add data to IndexedDB
export const addData = createAction('Add Data', props<{ item: ToDoListModel }>());
export const addDataSuccess = createAction('Add Data Success');
export const addDataFailure = createAction('Add Data Failure', props<{ error: any }>());

// Update data in IndexedDB
export const updateData = createAction('Update Data', props<{ item: ToDoListModel }>());
export const updateDataSuccess = createAction('Update Data Success');
export const updateDataFailure = createAction('Update Data Failure', props<{ error: any }>());

// Delete data from IndexedDB
export const deleteData = createAction('Delete Data', props<{ id: number }>());
export const deleteDataSuccess = createAction('Delete Data Success');
export const deleteDataFailure = createAction('Delete Data Failure', props<{ error: any }>());

// Get Data By Email
export const getDataByEmail = createAction('Get Data By Email', props<{ email: string }>());
export const getDataByEmailSuccess = createAction('Get Data By Email Success', props<{ data: ToDoListModel[] }>());
export const getDataByEmailFailure = createAction('Get Data By Email Failure', props<{ error: any }>());