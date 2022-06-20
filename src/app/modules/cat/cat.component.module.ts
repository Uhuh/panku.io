import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatComponent } from './cat.component';

@NgModule({
  declarations: [CatComponent],
  imports: [RouterModule.forChild([{ path: '', component: CatComponent }])],
})
export class CatModule {}
