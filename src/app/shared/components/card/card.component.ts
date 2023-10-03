import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf],
})
export class CardComponent implements OnInit {
  @Input() assetNames?: string[];
  @Input() twitterName?: string;

  constructor() {}

  get assets() {
    return this.assetNames?.map((name) => `assets/${name}`);
  }

  get twitter() {
    return `https://twitter.com/${this.twitterName}`;
  }

  ngOnInit(): void {}
}
