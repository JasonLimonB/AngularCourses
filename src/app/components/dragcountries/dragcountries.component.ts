import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

import { CountriesSService } from '../../services/countries-s.service';

@Component({
  selector: 'app-dragcountries',
  templateUrl: './dragcountries.component.html',
  styleUrls: ['./dragcountries.component.css'],
  providers: [ CountriesSService ]
})
export class DragcountriesComponent implements OnInit {

  constructor( private _service: CountriesSService ) { }

  arrCountries: any[] = [];

  ngOnInit(): void {
    this._service.getCountries().subscribe( (data: any) =>{
      this.arrCountries = data;
     });
  }

  drop(event: CdkDragDrop<any>){
    moveItemInArray(this.arrCountries, event.previousIndex, event.currentIndex);
  }

}
