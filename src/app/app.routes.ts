import { Routes } from '@angular/router';
import { Dashboard } from './modulos/dashboard/dashboard';
import { Productos } from './modulos/productos/productos';
import { Componente1 } from './modulos/componente1/componente1';
import { Componente2 } from './modulos/componente2/componente2';
import { Componente3 } from './modulos/componente3/componente3';

export const routes: Routes = [
    {path: "Dashboard", component: Dashboard},
    {path: "Productos", component: Productos},
    {path: "Componente1", component: Componente1},
    {path: "Componente2", component: Componente2},
    {path: "Componente3", component: Componente3}
];
