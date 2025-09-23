import { Component } from '@angular/core';
import { MathServicio } from '../../servicios/math-servicio';

@Component({
  selector: 'app-componente2',
  imports: [],
  templateUrl: './componente2.html',
  styleUrl: './componente2.css'
})
export class Componente2 {
  contador = 0;
  constructor(private mathServicio: MathServicio){}

  operarContador(estado: boolean): void {
    this.contador =  this.mathServicio.operarContador(estado, this.contador);
  }
}
