import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'src/app/shared/components/card/card.component.module';
import { CommissionsComponent } from './commissions.component';

@NgModule({
  declarations: [CommissionsComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CommissionsComponent,
        data: { title: 'Dylan Warren | Money Sink' },
      },
    ]),
    RouterModule,
    CardModule,
    CommonModule,
  ],
})
export class CommissionsModule {}
