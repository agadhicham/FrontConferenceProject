import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RoleModule {
  id: number;
  roleName: string;
  constructor(id: number,
    roleName: string) {
  }
}

