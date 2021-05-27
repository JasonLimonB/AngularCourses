import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './home/description/description.component';
import { MypipePipe } from '../pipes/mypipe.pipe';


import { MyvirtualscrollComponent } from './myvirtualscroll/myvirtualscroll.component';


@NgModule({
  declarations: [
    DescriptionComponent,
    MypipePipe,
    MyvirtualscrollComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule
  ],
  exports: [
    DescriptionComponent,
    MyvirtualscrollComponent
  ]
})
export class ComponentsModule { }
