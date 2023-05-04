import { Component, OnInit } from '@angular/core';

import { ArticuloTienda } from 'src/app/entidades/articulo/model/articuloTienda.model';
import { ArticuloService } from 'src/app/entidades/articulo/service/articulo.service';

@Component({
  selector: 'app-chaquetas',
  templateUrl: './chaquetas.component.html',
  styleUrls: ['./chaquetas.component.scss']
})
export class ChaquetasComponent implements OnInit {
  articulosList: ArticuloTienda[]=[];
  categoria: String | undefined;

  constructor(

    private articuloService: ArticuloService
  ){

  }
  ngOnInit(): void {
    this.obtenerChaquetas();
  }

  private obtenerChaquetas() {
    this.articuloService.obternerChaquetas().subscribe({
      next: (articulosRequest) => {
        articulosRequest.forEach( (articulo) =>{ //recibo los artículos y a través de la interfaz recupero los datos
          console.log(articulo);
          const articuloNew: ArticuloTienda = new ArticuloTienda(articulo.id, articulo.titulo, articulo.image, articulo.precio, articulo.rebaja);
          this.articulosList.push(articuloNew);
          console.log(articuloNew);
        })
      },
      error: (err) => {this.gestionarError(err);}
     })
  }
  private gestionarError(err: any) {
    console.log(err);
  }
}

