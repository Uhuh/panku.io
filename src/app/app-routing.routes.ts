import { Routes } from '@angular/router';
import { ErrorComponent } from './modules/error/error.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/home/home.component'),
    data: {
      title: 'Dylan Warren | Home',
    },
  },
  {
    path: 'project/:name',
    loadComponent: () => import('./modules/project/project.component'),
  },
  {
    path: 'cat',
    loadComponent: () => import('./modules/cat/cat.component'),
  },
  {
    path: 'commissions',
    loadComponent: () => import('./modules/commissions/commissions.component'),
    data: {
      title: 'Dylan Warren | Money Sink',
    },
  },
  {
    path: '**',
    component: ErrorComponent,
    data: {
      title: 'Dylan Warren | Error',
    },
  },
];
