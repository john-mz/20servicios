import { ParseLocation } from '@angular/compiler';
import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})



export class AppService {
  private historial: string[] = ["1", "2"];
  private peliculas: Pelicula[] = [
    {
      id: 1,
      nombre: "Inception",
      urlImagen: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH",
      isFavorite: false
    },
    {
      id: 2,
      nombre: "The Dark Knight",
      urlImagen: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkUywIUXDjHSQJIaNHYVs08osgBpF5Ot-xmB_omyEZeeRP9Xug",
      isFavorite: false
    },
    {
      id: 3,
      nombre: "Interstellar",
      urlImagen: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
      isFavorite: false
    },
    {
      id: 4,
      nombre: "The Matrix",
      urlImagen: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg",
      isFavorite: false
    },
    {
      id: 5,
      nombre: "Fight Club",
      urlImagen: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY679_.jpg",
      isFavorite: false
    },
    {
      id: 6,
      nombre: "Forrest Gump",
      urlImagen: "https://m.media-amazon.com/images/I/519NBNHX5BL._AC_SY679_.jpg",
      isFavorite: false
    },
    {
      id: 7,
      nombre: "Pulp Fiction",
      urlImagen: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg",
      isFavorite: false
    },
    {
      id: 8,
      nombre: "Gladiator",
      urlImagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFabKsWv9ru_kpMttjPf2493GGI7L3LpW3XjgPTE9FyHdNDIwV",
      isFavorite: false
    },
    {
      id: 9,
      nombre: "Avatar",
      urlImagen: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTwJPOxfRiaHwXkICnf6LKMHIPWJPGLx8wht-wZH-qFs0OXXUCBvOeCQTs79z7Bx9odsdsB",
      isFavorite: false
    },
    {
      id: 10,
      nombre: "The Lord of the Rings: The Fellowship of the Ring",
      urlImagen: "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_SY679_.jpg",
      isFavorite: false
    }
  ];
  private libros: Libro[] = [
    {
      id: 1,
      nombre: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      urlImagen: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
      isFavorite: false
    },
    {
      id: 2,
      nombre: "1984",
      autor: "George Orwell",
      urlImagen: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
      isFavorite: false
    },
    {
      id: 3,
      nombre: "Don Quijote de la Mancha",
      autor: "Miguel de Cervantes",
      urlImagen: "https://covers.openlibrary.org/b/id/8278320-L.jpg",
      isFavorite: false
    },
    {
      id: 4,
      nombre: "El Principito",
      autor: "Antoine de Saint-Exupéry",
      urlImagen: "https://covers.openlibrary.org/b/id/10422850-L.jpg",
      isFavorite: false
    },
    {
      id: 5,
      nombre: "Orgullo y Prejuicio",
      autor: "Jane Austen",
      urlImagen: "https://covers.openlibrary.org/b/id/8231994-L.jpg",
      isFavorite: false
    },
    {
      id: 6,
      nombre: "Matar a un ruiseñor",
      autor: "Harper Lee",
      urlImagen: "https://covers.openlibrary.org/b/id/8225265-L.jpg",
      isFavorite: false
    },
    {
      id: 7,
      nombre: "La Odisea",
      autor: "Homero",
      urlImagen: "https://covers.openlibrary.org/b/id/8235083-L.jpg",
      isFavorite: false
    },
    {
      id: 8,
      nombre: "Crimen y Castigo",
      autor: "Fiódor Dostoyevski",
      urlImagen: "https://covers.openlibrary.org/b/id/8232001-L.jpg",
      isFavorite: false
    },
    {
      id: 9,
      nombre: "Harry Potter y la piedra filosofal",
      autor: "J.K. Rowling",
      urlImagen: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
      isFavorite: false
    },
    {
      id: 10,
      nombre: "El Hobbit",
      autor: "J.R.R. Tolkien",
      urlImagen: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
      isFavorite: false
    }
  ];


  navegar(nombreComponente: string) {
    this.historial.push(nombreComponente);
  }

  consultar() {
    return [...this.historial].reverse();
  }

  get consultarPeliculas(){
    return this.peliculas;
  }

  get consultarLibros(){
    return this.libros;
  }

  get consultarPeliculasFavoritos(): Pelicula[]{
    return this.consultarPeliculas.filter(pelicula => pelicula.isFavorite == true);
  }

  get consultarLibrosFavoritos(): Libro[]{
    return this.consultarLibros.filter(libro => libro.isFavorite == true);
  }


  modificarEstadoPeliculas(id: number): void {
    this.libros[id - 1].isFavorite = !this.libros[id - 1].isFavorite
  }

  modificarEstadoLibros(id: number): void {
    this.peliculas[id - 1].isFavorite = !this.peliculas[id - 1].isFavorite
  }

}
