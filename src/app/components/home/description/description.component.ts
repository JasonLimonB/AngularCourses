import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-home-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  condition = true;

  arrUsuers: string[] = ["Jason", "Giovani", "Limon", "Benito"];

  changeValue(){
    this.condition = !this.condition;
  }

}
