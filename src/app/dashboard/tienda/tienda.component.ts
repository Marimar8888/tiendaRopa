import { Component, OnInit } from '@angular/core';

import { ArticuloService } from 'src/app/entidades/articulo/service/articulo.service';
import { ArticuloTienda } from 'src/app/entidades/articulo/model/articuloTienda.model';

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
          console.log(articulo);
          const articuloNew: ArticuloTienda = new ArticuloTienda(articulo.id, articulo.titulo, articulo.image, articulo.precio, articulo.rebaja);
          this.articulosList.push(articuloNew);
          console.log(articuloNew);
        })
      }

    )
  }

 }


