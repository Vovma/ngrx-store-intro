import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { getTeams, getTeamsSuccess, getTeamsFailure } from './main-store.actions';

@Injectable()
export class MainEffects {
  getTeams$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTeams),
      switchMap(() =>
        this.http.get('/api/teams').pipe(
          map((teams: any) => {
            return getTeamsSuccess({ teams });
          }),
          catchError((error: HttpErrorResponse) => of(getTeamsFailure({ error }))),
        ),
      ),
    ),
  );
  constructor(private actions$: Actions, private http: HttpClient) {}
}
