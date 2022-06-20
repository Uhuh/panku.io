import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() assetPath?: string;
  @Input() twitterName?: string;

  constructor() {}

  ngOnInit(): void {}

  get asset() {
    return `assets/${this.assetPath}`;
  }

  get twitter() {
    return `https://twitter.com/${this.twitterName}`;
  }
}
