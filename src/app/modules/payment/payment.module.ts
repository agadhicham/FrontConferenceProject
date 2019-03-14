import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleModule } from '../article/article.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PaymentModule {

  id: number;
  chargeAmount: number;
  nonce: string;
  article: ArticleModule;
  constructor(
    id: number,
    chargeAmount: number,
    nonce: string,
    article: ArticleModule,
  ) {

  }
}
