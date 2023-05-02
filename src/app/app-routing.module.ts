import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { TiendaComponent } from './dashboard/tienda/tienda.component';
import { NosotrosComponent } from './dashboard/nosotros/nosotros.component';
import { ArticuloFormComponent } from './entidades/articulo/articulo-form/articulo-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'ficha/:id', component: ArticuloFormComponent },
  {
      path: 'tienda',
      component: TiendaComponent,
      children: [
          {
            path: 'abrigos',
            component: TiendaComponent
          },
          {
              path: 'chaquetas',
              component: TiendaComponent
          },
          {
            path: 'pantalones',
            component: TiendaComponent
          },
          {
              path: 'sport',
              component: TiendaComponent
          },
          {
            path: 'corbatas',
            component: TiendaComponent
          },


      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
