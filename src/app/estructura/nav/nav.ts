import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from '../../servicios/app.service';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  constructor(private AppService: AppService){}

  navegar(texto: string):void{
    this.AppService.navegar(texto);
  }
}
