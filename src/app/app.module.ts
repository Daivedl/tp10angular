import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { WhereComponent } from './components/where/where.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ItemProductoComponent } from './components/item-producto/item-producto.component';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { KeysPipe } from './pipes/keys.pipe';
import { HttpClientModule } from '@angular/common/http';
import { DeliveryService } from './servicios/delivery.service';
import { CrudComponent } from './components/crud/crud.component';
import { EditarCrearComponent } from './components/editar-crear/editar-crear.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WhereComponent,
    ProductosComponent,
    ItemProductoComponent,
    DetalleInstrumentoComponent,
    KeysPipe,
    CrudComponent,
    EditarCrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DeliveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
