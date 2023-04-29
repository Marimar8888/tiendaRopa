import { Component, OnInit } from '@angular/core';
import { Carousel } from 'src/app/entidades/categorias.model';

@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.scss']
})
export class CarouselListComponent implements OnInit{

  imagenes: Carousel[]= [];

  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
