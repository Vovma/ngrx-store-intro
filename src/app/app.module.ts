import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/material/angular-material.module';
import { IntroDrawerComponent } from './modules/core/components/intro-drawer/intro-drawer.component';
import { TopMenuComponent } from './modules/core/components/top-menu/top-menu.component';

import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import {
  featureKey,
  mainStoreReducer,
} from './modules/store/main-store/main-store.reducer';
import { StoreExampleComponent } from './modules/core/components/store-example/store-example.component';
import { ExampleDialogComponent } from './modules/core/components/example-dialog/example-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

import { localStorageSync } from 'ngrx-store-localstorage';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MainEffects } from './modules/store/main-store/main-store.effects';

const localStorageSyncReducer = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return localStorageSync({ keys: [featureKey], rehydrate: true })(reducer);
};

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    IntroDrawerComponent,
    TopMenuComponent,
    StoreExampleComponent,
    ExampleDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ [featureKey]: mainStoreReducer }, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    EffectsModule.forRoot([MainEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
