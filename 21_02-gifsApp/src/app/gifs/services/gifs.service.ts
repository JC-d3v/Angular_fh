import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private _apiKey: string = 'mWUk3cu7HhdiZ8R5KUPNpbRCJiBDTgIY';
  private _sevicioUrl: string = 'https://api.giphy.com/v1/gifs';

  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private _http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifs(query: string) {

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', query);

    this._http.get<SearchGifsResponse>(`${this._sevicioUrl}/search`, { params: params })
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      })

    console.log(`msg`, params.toString());

  }

}
