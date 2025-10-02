import { Component } from '@angular/core';
import { MathServicio } from '../../servicios/math-servicio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente9',
  imports: [FormsModule],
  templateUrl: './componente9.html',
  styleUrl: './componente9.css'
})
export class Componente9 {
  res: string = "";
  claveGenerada: string = "";
  esSeguraClave: string = "";
  constructor(private MathService: MathServicio){}
  
  generateSecurePassword(): void{
    this.res = this.MathService.generateSecurePassword();
  }

  isPasswordSecure(){
    if (this.MathService.isPasswordSecure(this.claveGenerada)){
      this.esSeguraClave = "Es segura";
      return;
    }
    this.esSeguraClave = "No es segura";
  }


}
