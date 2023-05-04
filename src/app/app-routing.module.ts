import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { TiendaComponent } from './dashboard/tienda/tienda.component';
import { NosotrosComponent } from './dashboard/nosotros/nosotros.component';
import { ArticuloFormComponent } from './entidades/articulo/articulo-form/articulo-form.component';
import { AbrigosComponent } from './dashboard/tienda/abrigos/abrigos.component';
import { ChaquetasComponent } from './dashboard/tienda/chaquetas/chaquetas.component';
import { PantalonesComponent } from './dashboard/tienda/pantalones/pantalones.component';
import { SportsComponent } from './dashboard/tienda/sports/sports.component';
import { CorbatasComponent } from './dashboard/tienda/corbatas/corbatas.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'ficha/:id', component: ArticuloFormComponent },
  {path: 'tienda', component: TiendaComponent },
  {path: 'tienda/abrigos', component: AbrigosComponent },
  {path: 'tienda/chaquetas', component: ChaquetasComponent },
  {path: 'tienda/pantalones', component: PantalonesComponent },
  {path: 'tienda/sports', component: SportsComponent },
  {path: 'tienda/corbatas', component: CorbatasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
