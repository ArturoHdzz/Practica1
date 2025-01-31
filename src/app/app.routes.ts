import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'nav', loadComponent: () => import('./componentes/nav/nav.component')},
    { path: 'inicio', loadComponent: () => import('./componentes/inicio/inicio.component')},
    { path: 'contactanos', loadComponent: () => import('./componentes/contactanos/contactanos.component')},
    { path: 'tipos', loadComponent: () => import('./componentes/tipos/tipos.component')},
    { path: 'nosotros', loadComponent: () => import('./componentes/nosotros/nosotros.component')},
    { path: '**', redirectTo: 'inicio' },
];
