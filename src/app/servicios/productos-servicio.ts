import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosServicio {
  productos: any = [
    {
      "id": 1,
      "nombre": "Camiseta Deportiva",
      "descripcion": "Camiseta de poliéster transpirable para entrenamiento.",
      "precio": 19.99,
      "categoria": "Ropa"
    },
    {
      "id": 2,
      "nombre": "Auriculares Bluetooth",
      "descripcion": "Auriculares inalámbricos con cancelación de ruido.",
      "precio": 59.90,
      "categoria": "Tecnología"
    },
    {
      "id": 3,
      "nombre": "Mochila Escolar",
      "descripcion": "Mochila resistente al agua con compartimentos múltiples.",
      "precio": 24.50,
      "categoria": "Accesorios"
    },
    {
      "id": 4,
      "nombre": "Lámpara LED",
      "descripcion": "Lámpara de escritorio con luz regulable y USB.",
      "precio": 15.75,
      "categoria": "Hogar"
    },
    {
      "id": 5,
      "nombre": "Mouse Gamer",
      "descripcion": "Ratón óptico con luces RGB y alta precisión.",
      "precio": 29.99,
      "categoria": "Tecnología"
    },
    {
      "id": 6,
      "nombre": "Termo Acero Inoxidable",
      "descripcion": "Botella térmica que conserva el calor por 12 horas.",
      "precio": 17.90,
      "categoria": "Cocina"
    },
    {
      "id": 7,
      "nombre": "Zapatillas Running",
      "descripcion": "Zapatillas ligeras con suela antideslizante.",
      "precio": 49.99,
      "categoria": "Calzado"
    },
    {
      "id": 8,
      "nombre": "Cargador Inalámbrico",
      "descripcion": "Base de carga rápida compatible con varios modelos.",
      "precio": 22.00,
      "categoria": "Tecnología"
    },
    {
      "id": 9,
      "nombre": "Juego de Cuchillos",
      "descripcion": "Set de cocina con 5 cuchillos de acero inoxidable.",
      "precio": 34.80,
      "categoria": "Cocina"
    },
    {
      "id": 10,
      "nombre": "Pulsera Inteligente",
      "descripcion": "Monitor de actividad física con pulsómetro.",
      "precio": 38.49,
      "categoria": "Tecnología"
    },
    {
      "id": 11,
      "nombre": "Silla Ergonómica",
      "descripcion": "Silla de oficina ajustable con soporte lumbar.",
      "precio": 89.99,
      "categoria": "Muebles"
    },
    {
      "id": 12,
      "nombre": "Plancha de Vapor",
      "descripcion": "Plancha compacta con función anti goteo.",
      "precio": 27.60,
      "categoria": "Electrodomésticos"
    },
    {
      "id": 13,
      "nombre": "Pelota de Yoga",
      "descripcion": "Pelota antiexplosión para ejercicios de estiramiento.",
      "precio": 16.25,
      "categoria": "Deportes"
    },
    {
      "id": 14,
      "nombre": "Taza Cerámica",
      "descripcion": "Taza de café con diseño vintage.",
      "precio": 8.99,
      "categoria": "Cocina"
    },
    {
      "id": 15,
      "nombre": "Juego de Sábanas",
      "descripcion": "Sábanas de microfibra para cama matrimonial.",
      "precio": 42.30,
      "categoria": "Hogar"
    },
    {
      "id": 16,
      "nombre": "Parlante Bluetooth",
      "descripcion": "Altavoz portátil con sonido envolvente.",
      "precio": 36.95,
      "categoria": "Tecnología"
    },
    {
      "id": 17,
      "nombre": "Gorra Unisex",
      "descripcion": "Gorra de algodón con visera curva.",
      "precio": 12.50,
      "categoria": "Ropa"
    },
    {
      "id": 18,
      "nombre": "Cuaderno A5",
      "descripcion": "Cuaderno de tapa dura con 200 hojas rayadas.",
      "precio": 5.75,
      "categoria": "Papelería"
    },
    {
      "id": 19,
      "nombre": "Linterna Recargable",
      "descripcion": "Linterna LED con batería USB y 3 modos de luz.",
      "precio": 18.60,
      "categoria": "Herramientas"
    },
    {
      "id": 20,
      "nombre": "Cepillo Eléctrico",
      "descripcion": "Cepillo dental con temporizador y cabezales intercambiables.",
      "precio": 32.99,
      "categoria": "Cuidado personal"
    }
  ];

  listarProductos() {
    return this.productos;
  }

  buscarCategoria(dato: string){
    const productos_filtradors: any = this.productos.filter((item: any) => item.categoria == dato);
    return productos_filtradors;
  }
}
