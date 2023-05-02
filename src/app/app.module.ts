import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './dashboard/home/home.component';
import { TiendaComponent } from './dashboard/tienda/tienda.component';
import { NosotrosComponent } from './dashboard/nosotros/nosotros.component';
import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { CarrouselComponent } from './layout/carrousel/carrousel.component';
import { BannersComponent } from './layout/banners/banners.component';
import { CategoriasComponent } from './layout/categorias/categorias.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavCategoriasComponent } from './layout/nav-categorias/nav-categorias.component';
import { SobreComponent } from './layout/sobre/sobre.component';
import { ArticuloListComponent } from './entidades/articulo/articulo-list/articulo-list.component';
import { ArticuloFormComponent } from './entidades/articulo/articulo-form/articulo-form.component';
import { ArticuloCardComponent } from './entidades/articulo/articulo-card/articulo-card.component';
import { CarouselListComponent } from './entidades/carousel/carousel-list/carousel-list.component';
import { CarouselCardComponent } from './entidades/carousel/carousel-card/carousel-card.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TiendaComponent,
    NosotrosComponent,
    NavComponent,
    NavCategoriasComponent,
    HeaderComponent,
    CarrouselComponent,
    BannersComponent,
    CategoriasComponent,
    FooterComponent,
    SobreComponent,
    ArticuloListComponent,
    ArticuloFormComponent,
    ArticuloCardComponent,
    CarouselListComponent,
    CarouselCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
