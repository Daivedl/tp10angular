import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Instrumento } from 'src/app/entidades/Instrumento';
import { DeliveryService } from 'src/app/servicios/delivery.service';

@Component({
  selector: 'app-editar-crear',
  templateUrl: './editar-crear.component.html',
  styleUrls: ['./editar-crear.component.css']
})
export class EditarCrearComponent implements OnInit {

  texto = 'Agregar';
  instrumento = new Instrumento();
  hayDato = false;
  loading = true;
  errores = false;

  constructor(private servicioDelibery: DeliveryService, private router: Router) { }

  ngOnInit(): void {
    if(Number(this.router.url.substring(6)) > 0) {
      this.texto = 'Editar';
      this.cargarInstrumento(Number(this.router.url.substring(6)));
    }
  }

  cargarInstrumento(id: number) {
    this.servicioDelibery.getOne(id).subscribe((dato) => {
      this.instrumento = dato;
      this.loading = false;
      if (dato) {
        this.hayDato = true;
      }
    });
  }

  async onSubmit() {
    
      if (this.texto == 'Editar') {
        this.servicioDelibery.put(this.instrumento).subscribe(() => {
          alert('Registro editado...');
          this.router.navigateByUrl('/crud');
        });
      } else {
        this.servicioDelibery.post(this.instrumento).subscribe(() => {
          alert('Registro guardado...');
          this.router.navigateByUrl('/crud');
        });
      }
    
    

  }
}
