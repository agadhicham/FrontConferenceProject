import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleModule } from '../article/article.module';
import { Conference } from '../conference/conference';
import { ChairModule } from '../chair/chair.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PresentationModule {
  id: number;
  conference: Conference;
  article: ArticleModule;
  chair: ChairModule;
  constructor(id: number,
    conference: Conference,
    article: ArticleModule,
    chair: ChairModule) { }
}
