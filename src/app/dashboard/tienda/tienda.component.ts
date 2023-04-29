import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/articulo/articulo.service';
import { Articulos } from 'src/app/entidades/articulos.model';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit{

  articulosList: Articulos[]=[];

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
          const articuloNew: Articulos = new Articulos(articulo._idArt, articulo._titulo,articulo._image, articulo._precio);
          this.articulosList.push(articuloNew);
        })
      }
    )
  }


}
