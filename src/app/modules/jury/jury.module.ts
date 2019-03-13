import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class JuryModule {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string
  ) { }

}
