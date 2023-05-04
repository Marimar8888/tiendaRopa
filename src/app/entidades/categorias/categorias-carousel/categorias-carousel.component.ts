import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias-carousel',
  templateUrl: './categorias-carousel.component.html',
  styleUrls: ['./categorias-carousel.component.scss']
})
export class CategoriasCarouselComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {

  }

  imgCollection: Array<object> = [
    {
      image: './assets/img/abrigo.jpg',
      thumbImage: './assets/img/abrigo.jpg',
      alt: 'Abrigos',
      title: 'Abrigos'
    }, {
      image: './assets/img/chaqueta.jpg',
      thumbImage: './assets/img/chaqueta.jpg',
      title: 'Chaquetas',
      alt: 'Chaquetas'
    }, {
      image: './assets/img/pantalones.jpg',
      thumbImage: './assets/img/pantalones.jpg',
      title: 'Pantalones',
      alt: 'Image 3'
    }, {
      image: './assets/img/deporte.jpg',
      thumbImage: './assets/img/deporte.jpg',
      title: 'Sport',
      alt: 'Image 4'
    }, {
      image: './assets/img/corbatas.jpg',
      thumbImage: './assets/img/corbatas.jpg',
      title: 'Corbatas',
      alt: 'Image 5'
    },
    {
      image: './assets/img/abrigo.jpg',
      thumbImage: './assets/img/abrigo.jpg',
      alt: 'Abrigos',
      title: 'Abrigos'
    }, {
      image: './assets/img/chaqueta.jpg',
      thumbImage: './assets/img/chaqueta.jpg',
      title: 'Chaquetas',
      alt: 'Chaquetas'
    }, {
      image: './assets/img/pantalones.jpg',
      thumbImage: './assets/img/pantalones.jpg',
      title: 'Pantalones',
      alt: 'Image 3'
    }, {
      image: './assets/img/deporte.jpg',
      thumbImage: './assets/img/deporte.jpg',
      title: 'Sport',
      alt: 'Image 4'
    }, {
      image: './assets/img/corbatas.jpg',
      thumbImage: './assets/img/corbatas.jpg',
      title: 'Corbatas',
      alt: 'Image 5'
    }
];
}
