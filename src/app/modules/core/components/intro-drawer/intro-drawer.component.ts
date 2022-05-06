import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-intro-drawer',
  templateUrl: './intro-drawer.component.html',
  styleUrls: ['./intro-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroDrawerComponent implements OnInit {
  showFiller = false;

  public topics = [
    { name: 'switchMap' },
    { name: 'exhaustMap' },
    { name: 'mergeMap' },
    { name: 'concatMap' },
    { name: 'combineLatest' },
    { name: 'concat' },
    { name: 'forkJoin' },
    { name: 'merge' },
    { name: 'map' },
    { name: 'takeUntil' },
    { name: 'first' },
    { name: 'filter' },
    { name: 'take' },
    { name: 'withLatestFrom' },
    { name: 'tap' },
    { name: 'delay' },
  ];

  public toggleSideNav(): void {
    this.showFiller = !this.showFiller;
    this.cd.markForCheck();
  }

  constructor(public cd: ChangeDetectorRef) {}

  ngOnInit(): void {}
}
