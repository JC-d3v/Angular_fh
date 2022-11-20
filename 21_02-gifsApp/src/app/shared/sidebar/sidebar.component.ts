import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements OnInit {

  buscar(argumento: string) {
    this.gifsService.buscarGifs(argumento)
  };

  get historial() {
    return this.gifsService.historial;
  };


  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

}
