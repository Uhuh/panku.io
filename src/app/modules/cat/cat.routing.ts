import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./cat.component'),
    title: 'Cats!'
  },
  {
    path: 'cat',
    loadComponent: () => import('./cat-pics/cat-pics.component'),
    title: 'Cats | Cat'
  },
  {
    path: 'unagi',
    loadComponent: () => import('./unagi-pics/unagi-pics.component'),
    title: 'Cats | Unagi'
  }
];

export default routes;
