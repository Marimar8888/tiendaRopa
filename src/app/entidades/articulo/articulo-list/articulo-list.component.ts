import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticuloTienda } from 'src/app/entidades/articulo/model/articuloTienda.model';



@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.scss']
})
export class ArticuloListComponent implements OnInit{

  @Input() articulosList!: ArticuloTienda [];
  idArticulo?: string;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ){}

  ngOnInit(): void {

    this.obternerParametros();


  }
  //recupera el parámetro recibido en la url en este caso el idArticulo y lo guarda en la variable mismo nombre
  private obternerParametros():void {
    this.idArticulo= this.activeRoute.snapshot.queryParamMap.get('idArticulo') ?? undefined;
  }

  public navegarAFciha(idArticulo: number): void{
    this.router.navigate(['ficha', idArticulo]);
  }


}
