import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/material/angular-material.module';
import { IntroDrawerComponent } from './modules/core/components/intro-drawer/intro-drawer.component';
import { TopMenuComponent } from './modules/core/components/top-menu/top-menu.component';

@NgModule({
  declarations: [AppComponent, IntroDrawerComponent, TopMenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
