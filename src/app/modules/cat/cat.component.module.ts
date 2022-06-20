import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'src/app/shared/components/card/card.component.module';
import { CatComponent } from './cat.component';

@NgModule({
  declarations: [CatComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: CatComponent }]),
    CardModule,
    CommonModule,
  ],
})
export class CatModule {}
