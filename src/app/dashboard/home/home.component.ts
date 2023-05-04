import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/entidades/carousel/service/carousel.service';
import { Carousel } from 'src/app/entidades/carousel/model/carrousel.model';
import { CategoriasCarousel } from 'src/app/entidades/categorias/model/categorias.model';
import { CagoriasCarouselService } from 'src/app/entidades/categorias/service/cagorias-carousel.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  imagenesList: Carousel []=[];
  imagenesCategoria: CategoriasCarousel []=[];

  constructor(
    private carouselService: CarouselService,
    private categoriaService: CagoriasCarouselService
  ){

  }
  ngOnInit(): void {

    this.obternerImagenesCarousel();
    this.obternerImagenesCategoriasCarousel();

  }
  obternerImagenesCategoriasCarousel() {
    this.categoriaService.obternerImagenesCategoriasCarousel().subscribe(
      (data) =>{
        data.forEach( (imagen) =>{ //recibo los artículos y a través de la interfaz recupero los datos
          console.log(imagen);
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
           console.log(imagen);
           const imagenNew: Carousel = new Carousel(imagen.id, imagen.image, imagen.active);
           this.imagenesList.push(imagenNew);
           console.log(imagenNew);
         })
       }

     )
   }

}
