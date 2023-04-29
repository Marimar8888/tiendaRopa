import { Injectable } from '@angular/core';
import { Articulos } from '../entidades/articulos.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArticulos } from './articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  articulos: Articulos[]=[];


  constructor(
    private http: HttpClient
  ) { }

  public obternerArticulos(): Observable<IArticulos[]> {
      const url: string = 'http://localhost:3003/articulos';
      return this.http.get<IArticulos[]>(url);

  }
}
