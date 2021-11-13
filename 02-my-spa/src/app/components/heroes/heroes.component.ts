import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/herores.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService) {
    console.log(`constructor generando mensaje...!!!`)
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log(`ONINIT generando mensaje...!!!`, this.heroes)
  }

}
