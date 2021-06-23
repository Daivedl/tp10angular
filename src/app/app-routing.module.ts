import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './components/crud/crud.component';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { EditarCrearComponent } from './components/editar-crear/editar-crear.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { WhereComponent } from './components/where/where.component';

const routes: Routes = [
  { path: 'home' , component: HomeComponent},
  { path: 'where', component: WhereComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'productos/:id', component: DetalleInstrumentoComponent},
  { path: 'crud', component: CrudComponent},
  { path: 'crud/:id', component: EditarCrearComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
