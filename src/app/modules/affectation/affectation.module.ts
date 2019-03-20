import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationModule } from '../presentation/presentation.module';
import { JuryModule } from '../jury/jury.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AffectationModule {
  id: number;
  mark: number;
  presentation:PresentationModule;
  jury:JuryModule
  constructor(id: number,presentation:PresentationModule,
    jury:JuryModule
    ) { }
}
