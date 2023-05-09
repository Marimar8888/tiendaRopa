import { Component, OnInit } from '@angular/core';

import { ArticuloTienda } from 'src/app/entidades/articulo/model/articuloTienda.model';
import { ArticuloService } from 'src/app/entidades/articulo/service/articulo.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
  articulosList: ArticuloTienda[]=[];
  categoria: String | undefined;

  constructor(

    private articuloService: ArticuloService
  ){

  }
  ngOnInit(): void {
    this.obtenerSports();
  }
  private obtenerSports() {
    this.articuloService.obternerSports().subscribe({
      next: (articulosRequest) => {
        articulosRequest.forEach( (articulo) =>{ //recibo los artículos y a través de la interfaz recupero los datos
          const articuloNew: ArticuloTienda = new ArticuloTienda(articulo.id, articulo.titulo, articulo.image, articulo.precio, articulo.rebaja, articulo.favorite);
          this.articulosList.push(articuloNew);
        })
      },
      error: (err) => {this.gestionarError(err);}
     })
  }
  private gestionarError(err: any) {
    console.log(err);
  }
}
