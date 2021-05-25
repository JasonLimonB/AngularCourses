import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './home/description/description.component';
import { MypipePipe } from '../pipes/mypipe.pipe';



@NgModule({
  declarations: [
    DescriptionComponent,
    MypipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DescriptionComponent
  ]
})
export class ComponentsModule { }
