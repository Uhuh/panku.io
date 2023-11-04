import { Routes } from '@angular/router';
import { ErrorComponent } from './modules/error/error.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/home/home.component'),
    title: 'Dylan Warren | Home',
  },
  {
    path: 'project/:name',
    loadComponent: () => import('./modules/project/project.component'),
  },
  {
    path: 'cat',
    loadChildren: () => import('./modules/cat/cat.routing'),
  },
  {
    path: 'commissions',
    loadComponent: () => import('./modules/commissions/commissions.component'),
    title: 'Dylan Warren | Money Sink',
  },
  {
    path: '**',
    component: ErrorComponent,
    title: 'Dylan Warren | Error',
  },
];
