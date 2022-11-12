import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  // TIP: @ViewChild('txtBuscar') .- entre parentesis el elemento que deseamos buscar.

  // TIP: txtBuscar! .- "!" indica que la clase no es nulo, recibe el valor de ('txtBuscar')

  // TIP: ElementRef<HTMLInputElement> .- indicamos que el Element Ref es de tipo HTMLInputElement

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }


}
