import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';


@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 14000
    },
    {
      nombre: 'Vegueta',
      poder: 8500
    }
  ];

  get perssonajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {
    console.log(`msg servicio inicializado`);

  }

}