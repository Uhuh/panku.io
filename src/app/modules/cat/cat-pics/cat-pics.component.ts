import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../shared/components/card/card.component';
import { CatService } from '../cat.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-cat-pics',
  standalone: true,
  imports: [CommonModule, CardComponent],
  providers: [CatService],
  templateUrl: './cat-pics.component.html',
  styleUrls: ['./cat-pics.component.scss']
})
export class CatPicsComponent {
  readonly links$ = this.catService.cat.pipe(map(i => i.links));

  constructor(private readonly catService: CatService) {}
}

export default CatPicsComponent;
