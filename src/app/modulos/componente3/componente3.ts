import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodolistService } from '../../servicios/todolist.service';

interface Tarea{
  id: number;
  titulo: string;
  descripcion: string;
  estado: boolean;
}

@Component({
  selector: 'app-componente3',
  imports: [FormsModule],
  templateUrl: './componente3.html',
  styleUrl: './componente3.css'
})
export class Componente3 {
  constructor(private TodolistService: TodolistService){}

  create(titulo: string, descripcion: string, estado: boolean): void{
    this.TodolistService.tareas.push({id: this.TodolistService.tareas[-1].id, titulo: titulo, descripcion: descripcion, estado: estado});
  }

  get read(): Tarea[]{
    return this.TodolistService.read();
  }

  edit(id: number, titulo: string, descripcion: string, estado: boolean): void {
    this.TodolistService.edit(id, titulo, descripcion, estado);
  }

  delete(id: number): void {
    this.TodolistService.delete(id);
  }
}
