import { Injectable } from '@angular/core';
import { ICategoriasCarousel } from '../interface/categorias';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CagoriasCarouselService {


  constructor(
      private http: HttpClient
  ) { }


  public obternerImagenesCategoriasCarousel(): Observable<ICategoriasCarousel[]> {
    const url: string = 'http://localhost:3004';
    return this.http.get<ICategoriasCarousel[]>(url);

}
}
