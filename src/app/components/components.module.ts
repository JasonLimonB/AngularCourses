import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './home/description/description.component';
import { MypipePipe } from '../pipes/mypipe.pipe';

import { HttpClientModule } from '@angular/common/http';

import { MyvirtualscrollComponent } from './myvirtualscroll/myvirtualscroll.component';
import { DraganddropComponent } from './draganddrop/draganddrop.component';
import { DragcountriesComponent } from './dragcountries/dragcountries.component';


@NgModule({
  declarations: [
    DescriptionComponent,
    MypipePipe,
    MyvirtualscrollComponent,
    DraganddropComponent,
    DragcountriesComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    DragDropModule,
    HttpClientModule
  ],
  exports: [
    DescriptionComponent,
    MyvirtualscrollComponent,
    DraganddropComponent,
    DragcountriesComponent
  ]
})
export class ComponentsModule { }
