import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitan America'
  nombre2: string = 'thE bLacK wIdoW'
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  personajes: string[] = ['IronMan', 'Spider-Man', 'Thor', 'Loki', 'Groot']
  PI: number = Math.PI
  porcenjate: number = 0.123456789
  salario: number = 1234.5
  fecha: Date = new Date
  idioma: string = 'es'
  muestraClave: boolean = false
  videoUrl: string = 'https://www.youtube.com/embed/jHBGNXGjZWE'
  heroe = {
    nombre: 'Logan',
    clave: 'wolverine',
    mutacion: 'garras'
  }

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data')
    }, 4500)
  })
}
