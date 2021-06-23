import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from 'src/app/servicios/delivery.service';
import { Instrumento } from 'src/app/entidades/Instrumento';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  instrumentosArr: Instrumento[] = [];
  loading = true;
  constructor(private servicioDelivery: DeliveryService, private router: Router) { }


  ngOnInit(): void {
    this.servicioDelivery.getAll()
    .subscribe(dataInstrumentos => {
      for(let obtenido in dataInstrumentos){
        this.instrumentosArr.push(dataInstrumentos[obtenido]);
      }
      this.loading = false;
    });
  }
  public verInstrumento(idx:number){
    console.log("ID Instrumento " + idx);
    this.router.navigate(['/detalleInstrumento', idx])
  }
  /*async obtenerFDB(){
    const resp = await fetch('http://localhost:3001/api/instrumento');
    const data = await resp.json();
    const { results: [Instrumento]} = data;
    return Instrumento;
  }*/

}
