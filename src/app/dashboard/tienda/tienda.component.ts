import { Component, OnInit } from '@angular/core';

import { ArticuloService } from 'src/app/articulo/articulo.service';
import { ArticuloTienda } from 'src/app/entidades/articuloTienda.model';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit{

  articulosList: ArticuloTienda[]=[];


  constructor(
    private articuloService: ArticuloService
  ){}

  ngOnInit(): void {
        //cargar los artículos recibidos a través de un servicio
        this.obtenerArticulos();
  }

 private obtenerArticulos() {
   this.articuloService.obternerArticulos().subscribe(
      (data) =>{
        data.forEach( (articulo) =>{ //recibo los artículos y a través de la interfaz recupero los datos

          const articuloNew: ArticuloTienda = new ArticuloTienda(articulo.id, articulo.titulo, articulo.image, articulo.precio, articulo.rebaja);
          this.articulosList.push(articuloNew);

        })
      }

    )
  }

 }


