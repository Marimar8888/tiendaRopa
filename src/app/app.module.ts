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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TiendaComponent,
    NosotrosComponent,
    NavComponent,
    HeaderComponent,
    CarrouselComponent,
    BannersComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
