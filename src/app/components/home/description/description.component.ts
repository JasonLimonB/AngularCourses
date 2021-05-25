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

  example: string = "Example";

  num: number = Math.PI;
  otherNum: number = 0.543;
  user: any = {
    name: "Jason",
    lastName: "Limon",
    age: 25
  };
  myDate: Date = new Date();

  myOwnPipe: string = "jAsoN liMoN";

  changeValue(){
    this.condition = !this.condition;
  }

}
