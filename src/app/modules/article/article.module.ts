import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ArticleModule { 
  id: number;
  title: string;
  resume: string;

  constructor(
    id: number,
    title: string,
    resume: string
  ) { }
}
