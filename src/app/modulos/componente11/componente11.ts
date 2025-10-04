import { Component } from '@angular/core';
import { AppService } from '../../servicios/app.service';
import { CommonModule } from '@angular/common';
interface Pelicula {
  id: number;
  nombre: string;
  urlImagen: string;
  isFavorite: boolean;
}

interface Libro {
  id: number;
  nombre: string;
  autor: string;
  urlImagen: string;
  isFavorite: boolean;
}

@Component({
  selector: 'app-componente11',
  imports: [CommonModule],
  templateUrl: './componente11.html',
  styleUrl: './componente11.css'
})
export class Componente11 {
  constructor(private AppService: AppService){}

  get peliculas(): Pelicula[] {
    return this.AppService.consultarPeliculas;
  }

  get libros(): Libro[]{
    return this.AppService.consultarLibros;
  }

  modificarEstadoPeliculas(id: number): void{
    this.AppService.modificarEstadoPeliculas(id);
    
  }

  modificarEstadoLibros(id: number): void{
    this.AppService.modificarEstadoLibros(id);
  }
}
