import { Routes } from '@angular/router';
import { Dashboard } from './modulos/dashboard/dashboard';
import { Productos } from './modulos/productos/productos';
import { Componente1 } from './modulos/componente1/componente1';

export const routes: Routes = [
    {path: "Dashboard", component: Dashboard},
    {path: "Productos", component: Productos},
    {path: "Componente1", component: Componente1}
];
