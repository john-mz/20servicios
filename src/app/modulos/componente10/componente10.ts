import { Component } from '@angular/core';
import { AppService } from '../../servicios/app.service';

@Component({
  selector: 'app-componente10',
  imports: [],
  templateUrl: './componente10.html',
  styleUrl: './componente10.css'
})
export class Componente10 {
  constructor(private AppService: AppService){}

  get consultar(): string[]{
    return this.AppService.consultar();
  }
}
