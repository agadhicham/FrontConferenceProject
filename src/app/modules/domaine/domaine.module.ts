import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DomaineModule { 
  id: number;
  name: string;

  constructor(
    id: number,
    name: string
  ){}
}
