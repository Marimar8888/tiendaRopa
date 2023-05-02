import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IArticuloTienda } from '../interface/articuloTienda.interface';


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

}
