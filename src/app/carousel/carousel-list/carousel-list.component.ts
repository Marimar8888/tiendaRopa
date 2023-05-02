import { Component, Input } from '@angular/core';

import { Carousel } from 'src/app/entidades/carrousel.model';


@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.scss']
})
export class CarouselListComponent {

  @Input() imagenesList: Carousel[]=[];


}
