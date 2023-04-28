import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { TiendaComponent } from './dashboard/tienda/tienda.component';
import { NosotrosComponent } from './dashboard/nosotros/nosotros.component';

/*const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'tienda', component: TiendaComponent},
  {path: 'nosotros', component: NosotrosComponent}
];*/
const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'nosotros', component: NosotrosComponent},
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
