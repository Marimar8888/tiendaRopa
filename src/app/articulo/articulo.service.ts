import { Injectable } from '@angular/core';
import { Articulos } from '../entidades/articulos.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArticulos } from './articulo.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {



  constructor(
    private http: HttpClient
  ) { }

  /*public obternerArticulos(): Observable<Articulos[]> {
      const url: string = 'http://localhost:3003/articulos';
      return this.http.get<Articulos[]>(url);

  }*/
  public obternerArticulos() {
    const url: string = 'http://localhost:3003/articulos';
    return this.http.get<Articulos>(url);

}
}
