import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MathServicio } from '../../servicios/math-servicio';

@Component({
  selector: 'app-componente6',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './componente6.html',
  styleUrl: './componente6.css'
})
export class Componente6 {
  res = "";
  myForm = new FormGroup({
    num1: new FormControl(0, [Validators.required]),
    num2: new FormControl(0, [Validators.required]),
    signo: new FormControl('', [Validators.required])
  });

  onSubmit(): void{
    if (this.myForm.valid && this.myForm.value.signo){
      this.res = (this.MathServicio.operacionesMatematicasBasicas(this.myForm.value.num1!, this.myForm.value.num2!, this.myForm.value.signo)).toString();
      return;
    }
  }


  constructor(private MathServicio: MathServicio){}

  
}
