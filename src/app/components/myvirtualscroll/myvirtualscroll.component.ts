import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myvirtualscroll',
  templateUrl: './myvirtualscroll.component.html',
  styleUrls: ['./myvirtualscroll.component.css']
})
export class MyvirtualscrollComponent implements OnInit {

  data: any = Array(500).fill(0);

  constructor() { }

  ngOnInit(): void {
  }

}
