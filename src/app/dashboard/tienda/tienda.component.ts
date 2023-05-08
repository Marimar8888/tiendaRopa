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
  categoria: String | undefined;

  constructor(

    private articuloService: ArticuloService
  ){}

  ngOnInit(): void {

          this.obtenerArticulos();

  }

 private obtenerArticulos() {
   this.articuloService.obternerArticulos().subscribe({
    next: (articulosRequest) => {
      articulosRequest.forEach( (articulo) =>{ //recibo los artículos y a través de la interfaz recupero los datos
        const articuloNew: ArticuloTienda = new ArticuloTienda(articulo.id, articulo.titulo, articulo.image, articulo.precio, articulo.rebaja);
        this.articulosList.push(articuloNew);
      })
    },
    error: (err) => {this.gestionarError(err);}
   })

  }
  gestionarError(err: any) {
    console.log(err);
  }

  public navegarAFciha(idArticulo: number): void{
    // this.router.navigate(['ficha', idArticulo]);
   }


 }


