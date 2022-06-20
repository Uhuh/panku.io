import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialsComponent } from './socials.component';

@NgModule({
  declarations: [SocialsComponent],
  imports: [CommonModule, RouterModule],
  exports: [SocialsComponent],
})
export class SocialsModule {}
