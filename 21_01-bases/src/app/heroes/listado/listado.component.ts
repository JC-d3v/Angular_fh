import { Component } from '@angular/core';
import { statSync } from 'fs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor'];
  heroeBorrado: string = ''

  borrarHeroe(): void {
    console.log(`borrandoHeroe`);
    this.heroeBorrado = this.heroes.pop() || '';
  }
};
