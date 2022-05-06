import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, of, Subject } from 'rxjs';

import { debounceTime, delay, switchMap, takeUntil, tap } from 'rxjs/operators';
import { IntroDrawerComponent } from './modules/core/components/intro-drawer/intro-drawer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild(IntroDrawerComponent) matDrawer!: IntroDrawerComponent;

  title = 'ngrx-intro';

  public teams$ = new Subject();

  // public teams$ = this.http.get('/api/teams').pipe(delay(3000));

  public data: any;

  public counter: any = [];
  public counterEndData: any = [];

  public loading = false;

  public destroy$ = new Subject();

  constructor(private http: HttpClient) {}

  public getTeamList(): void {
    this.teams$.next('id');
  }

  ngOnInit(): void {
    this.teams$
      .pipe(
        tap((el) => {
          this.loading = true;
          console.log('why');

          if (this.counter.length >= 1) {
            this.counter.forEach((ell: any) => {
              ell.done = 'CANCELED';
            });
            this.counter.push({ val: this.counter.length, done: 'PENDING' });
          } else {
            this.counter.push({ val: this.counter.length, done: 'PENDING' });
          }
          this.counterEndData = this.counter;
        }),
        switchMap(() => this.http.get('/api/teams')),
        takeUntil(this.destroy$),
      )
      .subscribe((result) => {
        console.log('vin', this.counter);
        this.counter[this.counter.length - 1] = { ...this.counter.at(-1), done: 'DONE' };
        this.counterEndData = this.counter;
        this.counter = [];
        console.log(result);
        this.data = result;
        // do something with the returned data
        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
