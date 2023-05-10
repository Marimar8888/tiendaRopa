import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeEs from '@angular/common/locales/es';

import { AppRoutingModule } from './app-routing.module';


import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpRequestIntercept } from './config/interceptores/httpRequest.interceptor';

//Modulo de bootstrap instalado por consola para los carouseles ng add @ng-bootstrap/ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Modulo instalado para el carousel con multiples item de bootstrap para angular, librería positronx.io instalada por comandos npm i ng-image-slider --force
//import { NgImageSliderModule } from 'ng-image-slider';

//Para la visualización de la tienda
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { HomeComponent } from './dashboard/home/home.component';
import { TiendaComponent } from './dashboard/tienda/tienda.component';
import { NosotrosComponent } from './dashboard/nosotros/nosotros.component';
import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { CategoriasComponent } from './entidades/categorias/categorias/categorias.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavCategoriasComponent } from './layout/nav-categorias/nav-categorias.component';
import { SobreComponent } from './layout/sobre/sobre.component';
import { ArticuloListComponent } from './entidades/articulo/articulo-list/articulo-list.component';
import { ArticuloFormComponent } from './entidades/articulo/articulo-form/articulo-form.component';
import { ArticuloCardComponent } from './entidades/articulo/articulo-card/articulo-card.component';
import { CarouselListComponent } from './entidades/carousel/carousel-list/carousel-list.component';
import { ProductoComponent } from './entidades/producto/producto/producto.component';
import { ProductosComponent } from './entidades/producto/productos/productos.component';
import { PantalonesComponent } from './dashboard/tienda/pantalones/pantalones.component';
import { SportsComponent } from './dashboard/tienda/sports/sports.component';
import { AbrigosComponent } from './dashboard/tienda/abrigos/abrigos.component';
import { ChaquetasComponent } from './dashboard/tienda/chaquetas/chaquetas.component';
import { CorbatasComponent } from './dashboard/tienda/corbatas/corbatas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FichaComponent } from './dashboard/ficha/ficha.component';
import { BannerListComponent } from './entidades/banner/banner-list/banner-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TiendaComponent,
    NosotrosComponent,
    NavComponent,
    NavCategoriasComponent,
    HeaderComponent,
    CategoriasComponent,
    FooterComponent,
    SobreComponent,
    ArticuloListComponent,
    ArticuloFormComponent,
    ArticuloCardComponent,
    CarouselListComponent,
    ProductoComponent,
    ProductosComponent,
    PantalonesComponent,
    SportsComponent,
    AbrigosComponent,
    ChaquetasComponent,
    CorbatasComponent,
    FichaComponent,
    BannerListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
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
    },
    {
      provide: LOCALE_ID,
      useValue: 'es-ES'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
