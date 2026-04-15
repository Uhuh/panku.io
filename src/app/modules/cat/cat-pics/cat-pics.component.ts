import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../shared/components/card/card.component';
import { CatService } from '../cat.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-cat-pics',
  imports: [CommonModule, CardComponent],
  providers: [CatService],
  templateUrl: './cat-pics.component.html',
  styleUrls: ['./cat-pics.component.scss'],
})
export class CatPicsComponent {
  readonly #catService = inject(CatService);
  readonly links$ = this.#catService.cat.pipe(map(i => i.links));
}

export default CatPicsComponent;
