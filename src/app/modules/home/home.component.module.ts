import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialsModule } from 'src/app/shared/components/socials/socials.component.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    RouterModule,
    CommonModule,
    SocialsModule,
  ],
})
export class HomeModule {}
