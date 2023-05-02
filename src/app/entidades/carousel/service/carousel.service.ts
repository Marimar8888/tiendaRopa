import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carousel } from '../model/carrousel.model';



@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(
    private http: HttpClient
  ) { }


  /*public obternerArticulos(): Observable<Articulos[]> {
      const url: string = 'http://localhost:3003/articulos';
      return this.http.get<Articulos[]>(url);

  }*/
  public obternerImagenesCarousel() {
    const url: string = 'http://localhost:3002';
    return this.http.get<Carousel>(url);

}
}
