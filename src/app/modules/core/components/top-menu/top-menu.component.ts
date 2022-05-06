import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopMenuComponent implements OnInit {
  @Output() toggleMenuAction: EventEmitter<any> = new EventEmitter();
  @Input() menuToggleStatus!: boolean | undefined;

  constructor() {}

  public toggleMenu(): void {
    this.toggleMenuAction.emit();
  }

  ngOnInit(): void {}
}
