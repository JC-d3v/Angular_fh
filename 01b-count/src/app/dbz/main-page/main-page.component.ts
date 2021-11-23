import { Component } from '@angular/core';
interface Personaje {
  nombre: string
  poder: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  agregar() {
    console.log(`msg`)
  }
}
