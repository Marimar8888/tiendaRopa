import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IArticuloTienda } from '../interface/articuloTienda.interface';
import { IArticulo } from '../interface/articulo.interface';


@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(
    private http: HttpClient
  ) { }

  public obternerArticulos(): Observable<IArticuloTienda[]> {
      const url: string = 'http://localhost:3003/articulos';
      return this.http.get<IArticuloTienda[]>(url);
  }
  public obternerAbrigos(): Observable<IArticuloTienda[]> {
    const url: string = 'http://localhost:3005/articulos/abrigos';
    return this.http.get<IArticuloTienda[]>(url);
  }
  public obternerChaquetas(): Observable<IArticuloTienda[]> {
    const url: string = 'http://localhost:3009/articulos/chaquetas';
    return this.http.get<IArticuloTienda[]>(url);
  }
  public obternerCorbatas(): Observable<IArticuloTienda[]> {
    const url: string = 'http://localhost:3008/articulos/corbatas';
    return this.http.get<IArticuloTienda[]>(url);
  }
  public obternerPantalones(): Observable<IArticuloTienda[]> {
    const url: string = 'http://localhost:3006/articulos/pantalones';
    return this.http.get<IArticuloTienda[]>(url);
  }
  public obternerSports(): Observable<IArticuloTienda[]> {
    const url: string = 'http://localhost:3007/articulos/sports';
    return this.http.get<IArticuloTienda[]>(url);
  }
  public obternerFichas(): Observable<IArticulo[]> {
    const url: string = 'http://localhost:3011/articulos/fichas';
    return this.http.get<IArticulo[]>(url);
  }


}
