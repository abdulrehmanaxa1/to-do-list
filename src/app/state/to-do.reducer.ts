import { createReducer, on } from '@ngrx/store';
import * as ToDoActions from './to-do.action';
import { ToDoState } from './to-do.state';

const initialState: ToDoState = {
    data: [],
    loading: false,
    error: null
};

export const ToDoReducer = createReducer(
    initialState,
    on(ToDoActions.loadData, state => ({
      ...state,
      loading: true,
      error: null
    })),
    on(ToDoActions.loadDataSuccess, (state, { data }) => ({
      ...state,
      data: data,
      loading: false,
      error: null
    })),
    on(ToDoActions.loadDataFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error: error
    })),
    on(ToDoActions.addData, state => ({
      ...state,
      loading: true,
      error: null
    })),
    on(ToDoActions.addDataSuccess, state => ({
      ...state,
      loading: false,
      error: null
    })),
    on(ToDoActions.addDataFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error: error
    })),
    on(ToDoActions.updateData, state => ({
      ...state,
      loading: true,
      error: null
    })),
    on(ToDoActions.updateDataSuccess, state => ({
      ...state,
      loading: false,
      error: null
    })),
    on(ToDoActions.updateDataFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error: error
    })),
    on(ToDoActions.deleteData, state => ({
      ...state,
      loading: true,
      error: null
    })),
    on(ToDoActions.deleteDataSuccess, state => ({
      ...state,
      loading: false,
      error: null
    })),
    on(ToDoActions.deleteDataFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error: error
    })),
    on(ToDoActions.getDataByEmail, (state) => ({
        ...state,
        loading: true,
        error: null
      })),
      on(ToDoActions.getDataByEmailSuccess, (state, { data }) => ({
        ...state,
        data: data,
        loading: false,
        error: null
      })),
      on(ToDoActions.getDataByEmailFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error: error
      }))
  );