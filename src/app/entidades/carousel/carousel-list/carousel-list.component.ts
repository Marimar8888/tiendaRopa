import { Component, Input, OnInit } from '@angular/core';

import { Carousel } from 'src/app/entidades/carousel/model/carrousel.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.scss']
})
export class CarouselListComponent implements OnInit {

  @Input() imagenesList!: Carousel[];

  constructor(
      private config: NgbCarouselConfig
  ){}

  ngOnInit(): void {

  }



}
