import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, show: boolean = false): string {
    let cadena: string = value
    let cadena2: string = ''
    for (let index = 0; index < cadena.length; index++) {
      cadena2 += '*';

    }
    if (show) { return cadena } else { return cadena2 }
  }

}
