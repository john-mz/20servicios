import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrasesMotivacionesServicioService {
  private frases = [
  "Solo un pequeño pensamiento positivo por la mañana puede cambiar todo tu día.",
  "Las oportunidades no aparecen, las creas.",
  "La victoria más difícil es la victoria sobre uno mismo.",
  "La peor lucha es la que no se hace.",
  "La felicidad de tu vida depende de la calidad de tus pensamientos.",
  "Los momentos difíciles también pasan; mantén la calma y la esperanza.",
  "El éxito es insistir.",
  "Todo lo que siempre has querido está al otro lado del miedo.",
  "Lucha por tus sueños o los demás te impondrán los suyos.",
  "Tu energía positiva es el motor que transforma sueños en realidad."
];

  generarFrasesMotivacionales(){
    return this.frases[Math.floor(Math.random() * this.frases.length)]
  }
}
  
