import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf],
})
export class CardComponent {
  @Input({ required: true }) assetName!: string;
  @Input() twitterName?: string;

  get asset() {
    return `assets/${this.assetName}`;
  }

  get twitter() {
    return `https://twitter.com/${this.twitterName}`;
  }
}
