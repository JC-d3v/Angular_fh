import { Component } from '@angular/core';

// TIP: importamos activatedRouter para leer el indice 
import { ActivatedRoute } from '@angular/router';
// TIP: importamos el heroeService del servicio
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  // TIP: declaramos una variable objeto tipo any
  heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) {
    // TIP: recibimos el parametro de la ruta activa
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(`mensaje con el parametro`, params['id'])
    })

  }



}
