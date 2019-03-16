import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomaineModule } from '../domaine/domaine.module';

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
  postedAt: Date
  status:string
  domaine: DomaineModule;

  constructor(
    id: number,
    title: string,
    resume: string,
    domaine:DomaineModule
  ) { }
}
