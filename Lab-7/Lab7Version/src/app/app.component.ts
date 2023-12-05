import { Component, OnInit } from '@angular/core';
import { WebsService } from './webs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Lab7Version';

  movies:any;
  pelicual:any;
  mov:any;
  constructor (private peliculas: WebsService){}

  ngOnInit(): void {
    this.peliculas.retornar().subscribe(result=>this.movies=result)
  }

  onChange(value:any){
   this.peliculas.ObtenerPeliculas(value).subscribe(result=>this.pelicual=result)
  }

  DetallePelicula(arg0: any) {
   this.peliculas.ObtenerDetalle(arg0).subscribe(result=>this.mov=result)
  }
}
