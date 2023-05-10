import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/entidades/carousel/service/carousel.service';
import { Carousel } from 'src/app/entidades/carousel/model/carrousel.model';
import { CategoriasCarousel } from 'src/app/entidades/categorias/model/categorias.model';
import { CagoriasCarouselService } from 'src/app/entidades/categorias/service/cagorias-carousel.service';

import { ActivatedRoute } from '@angular/router';
import { BannerService } from 'src/app/entidades/banner/service/banner.service';
import { Banner } from 'src/app/entidades/banner/model/banner.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  imagenesList: Carousel []=[];
  imagenesCategoria: CategoriasCarousel []=[];
  imagenesBanner: Banner []=[];
  idArticulo?: string;

  constructor(
    private carouselService: CarouselService,
    private categoriaService: CagoriasCarouselService,
    private bannerService: BannerService,
    private activeRoute: ActivatedRoute
  ){

  }
  ngOnInit(): void {

    this.obternerImagenesCarousel();
    this.obternerImagenesCategoriasCarousel();
    this.obternerParametros();
    this.obtenerImagenesBanner();
  }
  private obtenerImagenesBanner() {
    this.bannerService.obternerImagenesBanner().subscribe(
      (data) =>{
        data.forEach( (imagen) =>{ //recibo los artículos y a través de la interfaz recupero los datos
          const imagenNew: Banner = new Banner(imagen.id, imagen.image, imagen.titulo);
            this.imagenesBanner.push(imagenNew);
        })
      }
    )
  }
  //recupera el parámetro recibido en la url en este caso el idArticulo y lo guarda en la variable mismo nombre
  private obternerParametros():void {
    this.idArticulo= this.activeRoute.snapshot.queryParamMap.get('id') ?? undefined;
  }

 private obternerImagenesCategoriasCarousel() {
    this.categoriaService.obternerImagenesCategoriasCarousel().subscribe(
      (data) =>{
        data.forEach( (imagen) =>{ //recibo los artículos y a través de la interfaz recupero los datos
          const imagenNew: CategoriasCarousel = new CategoriasCarousel(imagen.id, imagen.image, imagen.titulo);
            this.imagenesCategoria.push(imagenNew);
        })
      }
    )
  }

  private obternerImagenesCarousel() {
    this.carouselService.obternerImagenesCarousel().subscribe(
       (data) =>{
         data.forEach( (imagen) =>{ //recibo los artículos y a través de la interfaz recupero los datos
           const imagenNew: Carousel = new Carousel(imagen.id, imagen.image, imagen.active);
           this.imagenesList.push(imagenNew);
         })
       }

     )
   }

}
