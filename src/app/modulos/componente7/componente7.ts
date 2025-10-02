import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-componente7',
  imports: [CommonModule],
  templateUrl: './componente7.html',
  styleUrl: './componente7.css'
})
export class Componente7 {
  isActive = false;

  activarDarkMode(){
    this.isActive = !this.isActive;
  }
}
