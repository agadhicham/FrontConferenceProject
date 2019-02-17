import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {
  id: number;
  username: string;
  password: string;
  repassword: string;
  constructor(id: number, username: string, password: string, repassword: string) { }
}
