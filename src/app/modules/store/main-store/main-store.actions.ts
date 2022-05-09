import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Teams, User } from './main-store.reducer';

// example Counter
export const increment = createAction('[Example1] Increment');
export const decrement = createAction('[Example1] Decrement');
export const reset = createAction('[Example1] Reset');

// example create User
export const addUser = createAction('[Example2] Add User', props<{ user: User }>());
export const editUser = createAction('[Example2] Edit User');
export const removeUser = createAction('[Example2] Remove User');

// example create User
export const getTeams = createAction('[Example3] Get Teams');
export const getTeamsSuccess = createAction(
  '[Example3] Get Teams SUCCESS',
  props<{ teams: Teams[] }>(),
);
export const getTeamsFailure = createAction(
  '[Example3] Get Teams FAILURE',
  props<{ error: HttpErrorResponse }>(),
);

export const cleanTeams = createAction('[Example3] Clean Teams');
