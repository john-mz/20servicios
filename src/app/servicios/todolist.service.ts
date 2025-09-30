import { Injectable } from '@angular/core';

interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  estado: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class TodolistService {
  tareas: Tarea[] = [
    { id: 1, titulo: "Cobrarle a agudelo", descripcion: "Agudelo me debe billete", estado: false },
    { id: 2, titulo: "Cobrarle a agudelo", descripcion: "Agudelo me debe billete", estado: false },
    { id: 3, titulo: "Cobrarle a agudelo", descripcion: "Agudelo me debe billete", estado: false },
    { id: 4, titulo: "Cobrarle a agudelo", descripcion: "Agudelo me debe billete", estado: false }
  ]

  create(titulo: string, descripcion: string, estado: boolean): void {
    this.tareas.push({ id: this.tareas[-1].id, titulo: titulo, descripcion: descripcion, estado: estado });
  }

  read(): Tarea[] {
    return this.tareas;
  }

  edit(id: number): void {
    let titulo = prompt("Ingresa el titulo de la tarea");
    let descripcion = prompt("ingresa la descripcioin de la tarea");

    if (titulo && descripcion) {
      for (let i = 0; i < this.tareas.length; i++) {
        if (this.tareas[i].id == id) {
          this.tareas[i].titulo = titulo;
          this.tareas[i].descripcion = descripcion;
          this.tareas[i].estado = false;
        }
      }
    }


  }

  delete(id: number): void {
    this.tareas = this.tareas.filter(item => item.id != id);
  }

}
