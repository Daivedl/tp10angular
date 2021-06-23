import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instrumento } from 'src/app/entidades/Instrumento';
import { DeliveryService } from 'src/app/servicios/delivery.service';

@Component({
  selector: 'app-detalle-instrumento',
  templateUrl: './detalle-instrumento.component.html',
  styleUrls: ['./detalle-instrumento.component.css']
})
export class DetalleInstrumentoComponent implements OnInit {

  instrumento!: Instrumento;
  hayDato = false;
  loading = true;

  constructor(private activatedRoute: ActivatedRoute, private servicioDelibery: DeliveryService, private router: Router) {


  }

  ngOnInit(): void {
    this.cargarInstrumento();
  }
  cargarInstrumento() {
    this.servicioDelibery
      .getOne(Number(this.router.url.substring(11)))
      .subscribe((dato) => {
        this.instrumento = dato;
        this.loading = false;
        if (dato) {
          this.hayDato = true;
        }
      });
  }
  
}
