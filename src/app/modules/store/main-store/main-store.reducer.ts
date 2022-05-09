import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  addUser,
  removeUser,
  editUser,
  getTeams,
  getTeamsSuccess,
  getTeamsFailure,
  cleanTeams,
} from './main-store.actions';

export const featureKey = 'main';

export interface User {
  name: string | null;
  surname: string | null;
  description: string | null;
}

export interface Teams {
  id: number;
  name: string;
  coach: string;
  description: string;
}

export interface State {
  counter: number;
  user: User | null;
  teams: Teams[];
  teamsLoading: boolean;
  teamsError: HttpErrorResponse | null;
}

export const initialState: State = {
  counter: 0,
  user: null,
  teams: [],
  teamsLoading: false,
  teamsError: null,
};

export const mainStoreReducer = createReducer(
  initialState,
  on(increment, (state) => {
    console.log('LISTEN ON INCREMENT ACTION, counter value', state.counter);
    return { ...state, counter: state.counter + 1 };
  }),
  on(decrement, (state) => {
    console.log('LISTEN ON DECREMENT ACTION, counter value', state.counter);
    return { ...state, counter: state.counter - 1 };
  }),
  on(reset, (state) => {
    console.log('LISTEN ON RESET ACTION, counter value', state.counter);
    return { ...state, counter: 0 };
  }),

  on(addUser, (state, { user }) => {
    return { ...state, user };
  }),
  on(removeUser, (state) => {
    return { ...state, user: null };
  }),

  on(getTeams, (state) => {
    return { ...state, teamsLoading: true };
  }),
  on(getTeamsSuccess, (state, { teams }) => {
    console.log('team www', teams);
    return { ...state, teamsLoading: false, teamsError: null, teams };
  }),
  on(getTeamsFailure, (state, { error }) => {
    return { ...state, teamsLoading: false, teamsError: error };
  }),

  on(cleanTeams, (state) => {
    return { ...state, teams: [] };
  }),
);
