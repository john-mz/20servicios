import { Component } from '@angular/core';
import { MathServicio } from '../../servicios/math-servicio';

@Component({
  selector: 'app-componente1',
  imports: [],
  templateUrl: './componente1.html',
  styleUrl: './componente1.css'
})
export class Componente1 {
  num: number = 0;
  constructor(private mathServicio: MathServicio){}

  generarNumeroAleatorio(): void {
    this.num =  this.mathServicio.generarNumerosAleatorios();
  }
}
