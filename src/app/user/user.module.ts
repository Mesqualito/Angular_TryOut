import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, UserListComponent],
  exports: [UserComponent, UserListComponent]
})
export class UserModule { }
