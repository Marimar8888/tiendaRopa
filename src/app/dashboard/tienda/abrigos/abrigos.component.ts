import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloTienda } from 'src/app/entidades/articulo/model/articuloTienda.model';
import { ArticuloService } from 'src/app/entidades/articulo/service/articulo.service';

@Component({
  selector: 'app-abrigos',
  templateUrl: './abrigos.component.html',
  styleUrls: ['./abrigos.component.scss']
})
export class AbrigosComponent implements OnInit {

  articulosList: ArticuloTienda[]=[];
  categoria: String | undefined;

  constructor(
    private routeActive: ActivatedRoute,
    private articuloService: ArticuloService
  ){

  }
  ngOnInit(): void {

    this.obtenerAbrigos();

  }
  private obtenerAbrigos() {
    this.articuloService.obternerAbrigos().subscribe({
      next: (articulosRequest) => {
        articulosRequest.forEach( (articulo) =>{ //recibo los artículos y a través de la interfaz recupero los datos
          const articuloNew: ArticuloTienda = new ArticuloTienda(articulo.id, articulo.titulo, articulo.image, articulo.precio, articulo.rebaja);
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
