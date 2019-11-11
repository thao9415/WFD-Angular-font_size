import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.css']
})
export class FontComponent implements OnInit {

  fontSize = 14;
  onChange(value) {
    this.fontSize = value;
  }
  constructor() { }

  ngOnInit() {
  }

}
