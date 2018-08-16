import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import { UserTypeDirective } from './user/user-type.directive';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTypeDirective,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [UserTypeDirective, UserComponent]
})
export class AppModule { }
