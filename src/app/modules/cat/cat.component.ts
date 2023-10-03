import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
  standalone: true,
  imports: [NgFor, CardComponent],
})
export class CatComponent {
  readonly photos = Array(21)
    .fill(0)
    .map((_, i) => i);

  constructor() {
    // I want the cat photos to be more random so it doesn't look like there's cat bias.
    this.shuffle();
  }

  shuffle() {
    for (let i = this.photos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [this.photos[i], this.photos[j]] = [this.photos[j], this.photos[i]];
    }
  }
}

export default CatComponent;
