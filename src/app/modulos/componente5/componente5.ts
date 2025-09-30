import { Component } from '@angular/core';
import { FrasesMotivacionesServicioService } from '../../servicios/frases-motivaciones-servicio.service';

@Component({
  selector: 'app-componente5',
  imports: [],
  templateUrl: './componente5.html',
  styleUrl: './componente5.css'
})
export class Componente5 {
  frase = "";
  constructor(private FrasesMotivacionesServicioService: FrasesMotivacionesServicioService){}

  renderizarFrase(){
    this.frase = this.FrasesMotivacionesServicioService.generarFrasesMotivacionales();
  }


}
