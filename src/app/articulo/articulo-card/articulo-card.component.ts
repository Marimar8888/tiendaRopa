import { Component, Input } from '@angular/core';
import { ArticuloTienda } from 'src/app/entidades/articuloTienda.model';


@Component({
  selector: 'app-articulo-card',
  templateUrl: './articulo-card.component.html',
  styleUrls: ['./articulo-card.component.scss']
})
export class ArticuloCardComponent {

  //Va a recibir un objeto de la clase Articulos
  @Input() articulo: ArticuloTienda | undefined;

}
