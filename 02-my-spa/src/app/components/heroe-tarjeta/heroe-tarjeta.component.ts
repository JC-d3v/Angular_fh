import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {}
  @Input() indice: number = -1

  @Output() hereoSeleccionado: EventEmitter<number>

  constructor(private _router: Router) {
    this.hereoSeleccionado = new EventEmitter()
  }

  ngOnInit() {
  }
  verHeroe() {
    // console.log(this.indice);
    // this._router.navigate(['/heroe', this.indice])
    this.hereoSeleccionado.emit(this.indice)


  }
}
