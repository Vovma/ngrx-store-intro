import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  cleanTeams,
  decrement,
  getTeams,
  increment,
  removeUser,
} from 'src/app/modules/store/main-store/main-store.actions';
import { Teams, User } from 'src/app/modules/store/main-store/main-store.reducer';
import {
  selectCounter,
  selectTeams,
  selectTeamsLoading,
  selectUser,
} from 'src/app/modules/store/main-store/main-store.selectors';
import { ExampleDialogComponent } from '../example-dialog/example-dialog.component';

@Component({
  selector: 'app-store-example',
  templateUrl: './store-example.component.html',
  styleUrls: ['./store-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreExampleComponent implements OnInit, OnDestroy {
  public counter$: Observable<number> = this.store.select(selectCounter);
  public counterValue!: number;

  public user$: Observable<User | null> = this.store.select(selectUser);

  public teams$: Observable<Teams[] | null> = this.store.select(selectTeams);
  public teamsLoading$: Observable<boolean | null> =
    this.store.select(selectTeamsLoading);

  private destroy$ = new Subject();

  constructor(public store: Store, public dialog: MatDialog) {}

  // -
  public decrement(): void {
    console.log('CALL ACTION, counter value =', this.counterValue);
    this.store.dispatch(decrement());
  }

  // +
  public increment(): void {
    console.log('CALL ACTION, counter value =', this.counterValue);
    this.store.dispatch(increment());
  }

  public removeUser(): void {
    this.store.dispatch(removeUser());
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ExampleDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  getTeams(): void {
    console.log('get Items');
    this.store.dispatch(getTeams());
  }

  cleanTeams(): void {
    this.store.dispatch(cleanTeams());
  }

  ngOnInit(): void {
    this.counter$.pipe(takeUntil(this.destroy$)).subscribe((el) => {
      this.counterValue = el;
      console.log('el', el);
    });

    this.user$.pipe(takeUntil(this.destroy$)).subscribe((el) => {
      console.log('www', el);
    });

    this.teams$.pipe(takeUntil(this.destroy$)).subscribe((el) => {
      console.log('ttt', el);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
