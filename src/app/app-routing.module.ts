import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { TiendaComponent } from './dashboard/tienda/tienda.component';
import { NosotrosComponent } from './dashboard/nosotros/nosotros.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'tienda', component: TiendaComponent},
  {path: 'nosotros', component: NosotrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
