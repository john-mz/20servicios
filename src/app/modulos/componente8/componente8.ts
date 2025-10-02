import { Component } from '@angular/core';
import { MathServicio } from '../../servicios/math-servicio';
import { Form, FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-componente8',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './componente8.html',
  styleUrl: './componente8.css'
})

export class Componente8 {

  puntuacion = 0;

  incrementar(): void{
    this.puntuacion += 5;
  }

  decrementar(): void{
    if (this.puntuacion <= 0){
      return;
    } 
    this.puntuacion -= 5;
  }

}
