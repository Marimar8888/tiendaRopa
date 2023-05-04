import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './dashboard/home/home.component';
import { TiendaComponent } from './dashboard/tienda/tienda.component';
import { NosotrosComponent } from './dashboard/nosotros/nosotros.component';
import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { BannersComponent } from './layout/banners/banners.component';
import { CategoriasComponent } from './layout/categorias/categorias.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavCategoriasComponent } from './layout/nav-categorias/nav-categorias.component';
import { SobreComponent } from './layout/sobre/sobre.component';
import { ArticuloListComponent } from './entidades/articulo/articulo-list/articulo-list.component';
import { ArticuloFormComponent } from './entidades/articulo/articulo-form/articulo-form.component';
import { ArticuloCardComponent } from './entidades/articulo/articulo-card/articulo-card.component';
import { CarouselListComponent } from './entidades/carousel/carousel-list/carousel-list.component';
import { CategoriasCarouselComponent } from './entidades/categorias/categorias-carousel/categorias-carousel.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpRequestIntercept } from './config/interceptores/httpRequest.interceptor';

//Modulo de bootstrap instalado por consola para los carouseles ng add @ng-bootstrap/ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Modulo instalado para el carousel con multiples item de bootstrap para angular, librería positronx.io instalada por comandos npm i ng-image-slider --force
import { NgImageSliderModule } from 'ng-image-slider';
//Para la visualización de la tienda
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';


import { ProductoComponent } from './entidades/producto/producto/producto.component';
import { ProductosComponent } from './entidades/producto/productos/productos.component';
import { PantalonesComponent } from './dashboard/tienda/pantalones/pantalones.component';
import { SportsComponent } from './dashboard/tienda/sports/sports.component';
import { AbrigosComponent } from './dashboard/tienda/abrigos/abrigos.component';
import { ChaquetasComponent } from './dashboard/tienda/chaquetas/chaquetas.component';
import { CorbatasComponent } from './dashboard/tienda/corbatas/corbatas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TiendaComponent,
    NosotrosComponent,
    NavComponent,
    NavCategoriasComponent,
    HeaderComponent,
    BannersComponent,
    CategoriasComponent,
    FooterComponent,
    SobreComponent,
    ArticuloListComponent,
    ArticuloFormComponent,
    ArticuloCardComponent,
    CarouselListComponent,
    CategoriasCarouselComponent,
    ProductoComponent,
    ProductosComponent,
    PantalonesComponent,
    SportsComponent,
    AbrigosComponent,
    ChaquetasComponent,
    CorbatasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgImageSliderModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports:[
    MatCardModule

  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestIntercept,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
