import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input('nuevoPersonaje') nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Input('arregloPersonajes') personajes: Personaje[] = [];


  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    };

    console.log(this.nuevo);
    console.log(this.personajes);
  }



}
