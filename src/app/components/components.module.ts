import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './home/description/description.component';
import { MypipePipe } from '../pipes/mypipe.pipe';


import { MyvirtualscrollComponent } from './myvirtualscroll/myvirtualscroll.component';
import { DraganddropComponent } from './draganddrop/draganddrop.component';


@NgModule({
  declarations: [
    DescriptionComponent,
    MypipePipe,
    MyvirtualscrollComponent,
    DraganddropComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    DragDropModule
  ],
  exports: [
    DescriptionComponent,
    MyvirtualscrollComponent,
    DraganddropComponent
  ]
})
export class ComponentsModule { }
