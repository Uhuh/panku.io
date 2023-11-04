import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../shared/components/card/card.component';
import { CatService } from '../cat.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-unagi-pics',
  standalone: true,
  imports: [CommonModule, CardComponent],
  providers: [CatService],
  templateUrl: './unagi-pics.component.html',
  styleUrls: ['./unagi-pics.component.scss']
})
export class UnagiPicsComponent {
  readonly links$ = this.catService.unagi.pipe(map(i => i.links));

  constructor(private readonly catService: CatService) {}
}

export default UnagiPicsComponent;
