import { Input } from '@angular/core';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Instrumento } from 'src/app/entidades/Instrumento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.css']
})
export class ItemProductoComponent implements OnInit {

  @Input() instrumentoAux!: Instrumento;
  @Input() index!: number;

  @Output() instrumentoSeleccionado!: EventEmitter<number>;

  constructor( private router:Router) { 
    this.instrumentoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }


  public verInstrumento(){
    this.instrumentoSeleccionado.emit(this.index);
  }
  redireccionar(id: number) {
    this.router.navigateByUrl('/productos/' + id);
  }
}
