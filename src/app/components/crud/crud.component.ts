import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instrumento } from 'src/app/entidades/Instrumento';
import { DeliveryService } from 'src/app/servicios/delivery.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  loading = true;
  hayDatos = false;
  instrumentos!: Instrumento[];

  constructor(private servicioDelivery: DeliveryService, private router: Router) { }

  ngOnInit(): void {
    this.cargarInstrumentos();
  }

  cargarInstrumentos() {
    this.servicioDelivery.getAll().subscribe((data) =>{
      this.instrumentos = data;
      this.loading = false;
      if (this.instrumentos.length >= 1){
        this.hayDatos = true;
      }
    });
  }

  eliminar(id: number){
    this.servicioDelivery.delete(id).subscribe(() => alert('Registro eliminado'));
    window.location.reload();
  }
}
