import { Component, OnInit } from '@angular/core';
import { FIGURES } from './figures-model/figures-mock';

@Component({
  selector: 'app-figures',
  templateUrl: './figures.component.html',
  styleUrls: ['./figures.component.css']
})
export class FiguresComponent implements OnInit {
  figures = FIGURES;

  constructor() { }

  ngOnInit() {
    console.log(this.figures)
  }

}
