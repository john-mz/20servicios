import { Routes } from '@angular/router';
import { Dashboard } from './modulos/dashboard/dashboard';
import { Productos } from './modulos/productos/productos';
import { Componente1 } from './modulos/componente1/componente1';
import { Componente2 } from './modulos/componente2/componente2';
import { Componente3 } from './modulos/componente3/componente3';
import { Componente5 } from './modulos/componente5/componente5';
import { Componente6 } from './modulos/componente6/componente6';
import { Componente7 } from './modulos/componente7/componente7';

export const routes: Routes = [
    {path: "Dashboard", component: Dashboard},
    {path: "Productos", component: Productos},
    {path: "Componente1", component: Componente1},
    {path: "Componente2", component: Componente2},
    {path: "Componente3", component: Componente3},
    {path: "Componente5", component: Componente5},
    {path: "Componente6", component: Componente6},
    {path: "Componente7", component: Componente7}
];
