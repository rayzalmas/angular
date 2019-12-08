import { Component, OnInit } from '@angular/core';
import { FIGURES } from '../figures-model/figures-mock';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-figure',
  templateUrl: './detail-figure.component.html',
  styleUrls: ['./detail-figure.component.css']
})
export class DetailFigureComponent implements OnInit {
  id: Number;
  figure: any;
  figures: any;

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(param => {
      this.id = param['slug'];
      console.log(param['slug'])
    })
  }

  ngOnInit() {
    let art = [];
    for (let i = 0; i < 5; i++) {
      if(FIGURES[i].id == this.id) {
        this.figure = FIGURES[i];
      } else {
        art.push(FIGURES[i]);
      }
    }
    this.figures = art;
  }

}
