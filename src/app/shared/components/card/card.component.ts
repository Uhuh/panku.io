import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() assetNames?: string[];
  @Input() twitterName?: string;

  constructor() {}

  ngOnInit(): void {}

  get assets() {
    return this.assetNames?.map((name) => `assets/${name}`);
  }

  get twitter() {
    return `https://twitter.com/${this.twitterName}`;
  }
}
