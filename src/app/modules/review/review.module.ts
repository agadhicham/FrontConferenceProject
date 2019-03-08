import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleModule } from '../article/article.module';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ReviewModule {
  id: number;
  rate: number;
  view: string;
  article: ArticleModule;
  reviewer: UserModule;
  constructor(
    id: number,
    rate: number,
    view: string,
    article: ArticleModule,
    reviewer: UserModule,
  ) {

  }
}
