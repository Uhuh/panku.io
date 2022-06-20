import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    RouterModule.forChild([
      { path: '/project/:name', component: ProjectComponent },
    ]),
    RouterModule,
    CommonModule,
  ],
})
export class ProjectModule {}
