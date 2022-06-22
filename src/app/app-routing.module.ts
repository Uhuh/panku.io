import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './modules/error/error.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.component.module').then((m) => m.HomeModule),
    data: {
      title: 'Dylan Warren | Home',
    },
  },
  {
    path: 'project/:name',
    loadChildren: () =>
      import('./modules/project/project.component.module').then(
        (m) => m.ProjectModule
      ),
  },
  {
    path: 'cat',
    loadChildren: () =>
      import('./modules/cat/cat.component.module').then((m) => m.CatModule),
  },
  {
    path: 'commissions',
    loadChildren: () =>
      import('./modules/commissions/commissions.component.module').then(
        (m) => m.CommissionsModule
      ),
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
