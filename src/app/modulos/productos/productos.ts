import { Component } from '@angular/core';
import { ProductosServicio } from '../../servicios/productos-servicio';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-productos',
  imports: [FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {
  cate: string = "";
  constructor(private sProductos: ProductosServicio){}

  get consultar(){
    return this.sProductos.listarProductos();
  }

  filtro(){
    return this.sProductos.buscarCategoria(this.cate);
  }


}
