import { Component, Input } from '@angular/core';
import { Carousel } from 'src/app/entidades/carousel/model/carrousel.model';
import { CategoriasCarousel } from 'src/app/entidades/categorias/model/categorias.model';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {
  @Input() imagenesCategoria!: CategoriasCarousel[];
}
