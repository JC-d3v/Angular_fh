import { Component } from '@angular/core'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent {
  mostrar: boolean = true;
  frase: any = {
    mensaje: 'con un gran poder viene una gran responsabilidad',
    autor: 'Ben Parker'
  };
  personajes: string[] = ['siperman', 'venom', 'morbius'];
}