import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private historial: string[] = ["1", "2"];

  navegar(nombreComponente: string){
    this.historial.push(nombreComponente);
  }

  consultar(){
    return [...this.historial].reverse();
  }
}
