import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { CardComponent } from '../../shared/components/card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.scss'],
  standalone: true,
  imports: [NgFor, CardComponent],
})
export class CommissionsComponent implements OnInit {
  readonly commissions = [
    { assets: ['commissions/toxicsoul77.png'], twitter: 'toxicsoul77' },
    { assets: ['commissions/lemyawn.png'], twitter: 'lemyawn' },
    { assets: ['commissions/xoauri.png'], twitter: 'xoauri' },
    { assets: ['commissions/kinnimin.png'], twitter: 'kinnimin' },
    { assets: ['commissions/shichimarukyuu.png'], twitter: 'shichimarukyuu' },
    { assets: ['commissions/amelya_33.png'], twitter: 'amelya_33' },
    { assets: ['commissions/renai1000se.png'], twitter: 'renai1000se' },
    { assets: ['commissions/yakkuvt.png'], twitter: 'yakkuvt' },
    { assets: ['commissions/Shiorimia.png'], twitter: 'Shiorimia' },
    { assets: ['images/panku-icon.png'], twitter: 'flower_lynnn' },
    { assets: ['commissions/c2rt0.png'], twitter: 'c2rt0' },
    { assets: ['commissions/tricksterbun.png'], twitter: 'tricksterbun' },
    { assets: ['commissions/dess.png'], twitter: '[redacted]' },
    { assets: ['commissions/enana.jpg'], twitter: '[redacted]' },
    { assets: ['commissions/kutrly.png'], twitter: '[redacted]' },
    { assets: ['commissions/kutrly2.png'], twitter: '[redacted]' },
    { assets: ['commissions/flower2.png'], twitter: 'flower_lynnn' },
    { assets: ['commissions/ganyuun.png'], twitter: 'ganyuun' },
    { assets: ['commissions/_Crunnchy.png'], twitter: '_Crunnchy' },
  ];

  constructor(private readonly meta: Meta) {
    this.meta.addTags(
      [
        {
          name: 'description',
          content: 'This is my money sink.',
        },
      ],
      true
    );
  }

  ngOnInit(): void {}
}

export default CommissionsComponent;
