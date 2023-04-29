import { Component, Input } from '@angular/core';
import { Articulos } from 'src/app/entidades/articulos.model';

@Component({
  selector: 'app-articulo-card',
  templateUrl: './articulo-card.component.html',
  styleUrls: ['./articulo-card.component.scss']
})
export class ArticuloCardComponent {

  //Va a recibir un objeto de la clase Articulos
  @Input() articulo! : Articulos;

}
