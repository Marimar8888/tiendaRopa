import { Component, Input } from '@angular/core';
import { ArticuloTienda } from '../../articulo/model/articuloTienda.model';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {

    //Va a recibir un objeto de la clase Articulos
    @Input() articulo: ArticuloTienda | undefined;



}
