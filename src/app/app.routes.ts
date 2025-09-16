import { Routes } from '@angular/router';
import { Dashboard } from './modulos/dashboard/dashboard';
import { Productos } from './modulos/productos/productos';

export const routes: Routes = [
    {path: "Dashboard", component: Dashboard},
    {path: "Productos", component: Productos}
];
