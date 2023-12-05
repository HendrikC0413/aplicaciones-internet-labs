import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebsService {

  constructor(private http:HttpClient) { }

  retornar(){
    return this.http.get("http://api.filmon.com/api/vod/genres");
  }

  ObtenerPeliculas(valor:any){
    return this.http.get("http://api.filmon.com/api/vod/search?genre="+valor);
  }

  ObtenerDetalle(valor:any){
    return this.http.get("http://api.filmon.com/api/vod/movie?id="+valor);
  }
}
