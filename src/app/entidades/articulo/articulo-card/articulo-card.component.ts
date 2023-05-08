import { Component, Input } from '@angular/core';
import { ArticuloTienda } from 'src/app/entidades/articulo/model/articuloTienda.model';


import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');


@Component({
  selector: 'app-articulo-card',
  templateUrl: './articulo-card.component.html',
  styleUrls: ['./articulo-card.component.scss']
})
export class ArticuloCardComponent {

  //Va a recibir un objeto de la clase Articulos
  @Input() articulo: ArticuloTienda | undefined;



}
