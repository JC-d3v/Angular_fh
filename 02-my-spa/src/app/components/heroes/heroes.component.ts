import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
// TIP: importamos el router al componente heroes para acceder la ruta de otro componente
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(
    private _heroesService: HeroesService,
    private _router: Router) {
    console.log(`constructor generando mensaje...!!!`)

  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log(`ONINIT generando mensaje...!!!`, this.heroes)
  }

  // TIP: indicar el numero de idx para la navegacion en la ruta
  verHeroe(idx: number) {
    this._router.navigate(['/heroe', idx])
  }

}
