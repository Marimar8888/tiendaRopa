import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/entidades/articulo/model/articulo.model';
import { ArticuloService } from 'src/app/entidades/articulo/service/articulo.service';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit{
  articuloFicha: Articulo []=[];
  idArticulo?: string;

  constructor(private articuloService: ArticuloService,
              private route: ActivatedRoute){}
  ngOnInit(): void {
    this.idArticulo = this.route.snapshot.paramMap.get('id') ?? undefined;

    this.obternerFichas();
    //inspeccionar la ruta activa con un idArticulo si no tiene valor devuelve undefined

  }
  private obternerFichas() {
    this.articuloService.obternerFichas().subscribe({

      next: (articulosRequest) => {

          articulosRequest.forEach( (articulo) =>{ //recibo los artículos y a través de la interfaz recupero los datos

           if(this.idArticulo != undefined && articulo.id===parseInt(this.idArticulo)){
            const articuloNew: Articulo = new Articulo(articulo.id, articulo.titulo, articulo.image, articulo.precio, articulo.rebaja,
              articulo.tallaXs, articulo.tallaS, articulo.tallaM, articulo.tallaL, articulo.tallaXl, articulo.tallaXxl);
              this.articuloFicha.push(articuloNew);
              console.log(this.articuloFicha);

            }
          })

      },
      error: (err) => {this.gestionarError(err);}
     })
  }

  gestionarError(err: any) {
    console.log(err);
  }

}
