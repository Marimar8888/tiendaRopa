import { Component, Input, OnInit } from '@angular/core';

import { Articulo } from '../model/articulo.model';

@Component({
  selector: 'app-articulo-form',
  templateUrl: './articulo-form.component.html',
  styleUrls: ['./articulo-form.component.scss']
})
export class ArticuloFormComponent  {

  @Input() articuloFicha!: Articulo [];


}
