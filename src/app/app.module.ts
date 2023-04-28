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
import { CatalogoComponent } from './layout/catalogo/catalogo.component';
import { FichaComponent } from './layout/ficha/ficha.component';



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
    CatalogoComponent,
    FichaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
