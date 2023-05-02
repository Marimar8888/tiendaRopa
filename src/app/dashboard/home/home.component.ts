import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/carousel/carousel.service';
import { Carousel } from 'src/app/entidades/carrousel.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  imagenesList: Carousel []=[];

  constructor(
    private carouselService: CarouselService
  ){

  }
  ngOnInit(): void {

    this.obternerImagenesCarousel();

  }
  obternerImagenesCarousel() {
    this.carouselService.obternerImagenesCarousel().subscribe((result: any) => {
      this.imagenesList = result;
   });
  }

}
