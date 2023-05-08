import { Component, Input } from '@angular/core';

import { Articulo } from '../model/articulo.model';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-articulo-form',
  templateUrl: './articulo-form.component.html',
  styleUrls: ['./articulo-form.component.scss']
})
export class ArticuloFormComponent  {

  @Input() articuloFicha!: Articulo [];


}
