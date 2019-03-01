import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleModule } from '../role/role.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ChairModule {
  id: number;
  username: string;
  password: string;
  role:RoleModule
  
  constructor(id: number, username: string, password: string,role:RoleModule) { }
 }
