import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 28500
    },
    {
      nombre: 'Krilin',
      poder: 29500
    }
  ]

  nuevo: Personaje = {
    nombre: 'Default-1',
    poder: 100
  }

  agregarNuevoPersonaje(argumento: Personaje) {
    this.personajes.push(argumento);
    console.log(`Main page component`);
    console.log('Argumento ', argumento);
  }

}
