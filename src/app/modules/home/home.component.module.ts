import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialsModule } from 'src/app/shared/components/socials/socials.component.module';
import { TerminalModule } from 'src/app/shared/components/terminal/terminal.component.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        data: { title: 'Dylan Warren | Home' },
      },
    ]),
    RouterModule,
    CommonModule,
    SocialsModule,
    TerminalModule,
  ],
})
export class HomeModule {}
