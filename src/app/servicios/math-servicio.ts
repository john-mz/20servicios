import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathServicio {
  contador = 0;
  puntaje = 0;

  generarNumerosAleatorios(): number{
    return Math.floor(Math.random() * (10 - 0 + 1)) + 0;;
  }

  operarContador(estado: boolean): void{
    if (estado){
      ++this.contador;
    }else{
      --this.contador;
    }
  }

  operacionesMatematicasBasicas(num1: number, num2: number, operacion: String): number {
    switch (operacion) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
    }
    return num1 / num2;
  }

              //incrementar, 5
              //decrementar, 5
  puntuacion(accion: string, valor: number): void{
    if (this.puntaje <= 0) return;

    if (accion == "incrementar"){
      this.puntaje += valor;
    }

    this.puntaje -= valor;
  }
}
