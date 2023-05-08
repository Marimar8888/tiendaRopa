import { Component, Input } from '@angular/core';

import { ArticuloTienda } from 'src/app/entidades/articulo/model/articuloTienda.model';

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.scss']
})
export class ArticuloListComponent {

  @Input() articulosList!: ArticuloTienda [];

}
