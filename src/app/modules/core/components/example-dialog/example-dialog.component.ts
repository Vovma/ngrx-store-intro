import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addUser } from 'src/app/modules/store/main-store/main-store.actions';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleDialogComponent implements OnInit {
  constructor(public fb: FormBuilder, public store: Store, public dialog: MatDialog) {}

  public userForm = this.fb.group({
    name: this.fb.control(''),
    surname: this.fb.control(''),
    description: this.fb.control(''),
  });

  public submitForm(): void {
    console.log('form', this.userForm.value);
    this.store.dispatch(addUser({ user: this.userForm.value }));
    this.dialog.closeAll();
  }

  ngOnInit(): void {}
}
