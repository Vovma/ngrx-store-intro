import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-intro-drawer',
  templateUrl: './intro-drawer.component.html',
  styleUrls: ['./intro-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroDrawerComponent implements OnInit {
  showFiller = false;

  constructor() {}

  ngOnInit(): void {}
}
