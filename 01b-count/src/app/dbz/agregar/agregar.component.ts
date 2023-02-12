import { Component, Input, Output, EventEmitter } from '@angular/core';


import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: 'Jorge',
    poder: 150000
  }

  @Output() onNuevoPerosnaje: EventEmitter<Personaje> = new EventEmitter

  constructor(private dbzService: DbzService) {

  }


  // TIP: Output EventEmitter
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter()

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    // console.log(this.nuevo);
    // TIP: emit
    // this.onNuevoPersonaje.emit(this.nuevo)

    this.dbzService.agregarPersonaje(this.nuevo)

    this.nuevo = { nombre: '', poder: 0 }

  }
}
