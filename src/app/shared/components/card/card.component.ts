import { Component, HostBinding, Input } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
})
export class CardComponent {
  @Input() asset?: string;
  @Input() link?: string;
  @Input() twitterName?: string;

  loaded = false;

  @HostBinding('style.min-height') get loading() {
    return this.loaded ? '' : '200px';
  }

  get url() {
    return this.asset ? `assets/${this.asset}` : this.link;
  }

  get twitter() {
    return `https://twitter.com/${this.twitterName}`;
  }

  // LoadEvent
  onLoad(e: any) {
    this.loaded = e.target.complete;
  }
}
