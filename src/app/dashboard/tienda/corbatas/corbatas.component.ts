import { Component, OnInit } from '@angular/core';

import { ArticuloTienda } from 'src/app/entidades/articulo/model/articuloTienda.model';
import { ArticuloService } from 'src/app/entidades/articulo/service/articulo.service';

@Component({
  selector: 'app-corbatas',
  templateUrl: './corbatas.component.html',
  styleUrls: ['./corbatas.component.scss']
})
export class CorbatasComponent implements OnInit {
  articulosList: ArticuloTienda[]=[];
  categoria: String | undefined;

  constructor(
    private articuloService: ArticuloService
  ){

  }
  ngOnInit(): void {
    this.obtenerCorbatas();
  }
  private obtenerCorbatas() {
    this.articuloService.obternerCorbatas().subscribe({
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
