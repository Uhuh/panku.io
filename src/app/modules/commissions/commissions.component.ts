import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.scss'],
  standalone: true,
  imports: [NgFor, CardComponent],
})
export class CommissionsComponent {
  readonly commissions = [
    { asset: 'commissions/toxicsoul77.png', twitter: 'toxicsoul77' },
    { asset: 'commissions/lemyawn.png', twitter: 'lemyawn' },
    { asset: 'commissions/xoauri.png', twitter: 'xoauri' },
    { asset: 'commissions/kinnimin.png', twitter: 'kinnimin' },
    { asset: 'commissions/shichimarukyuu.png', twitter: 'shichimarukyuu' },
    { asset: 'commissions/amelya_33.png', twitter: 'amelya_33' },
    { asset: 'commissions/renai1000se.png', twitter: 'renai1000se' },
    { asset: 'commissions/yakkuvt.png', twitter: 'yakkuvt' },
    { asset: 'commissions/Shiorimia.png', twitter: 'Shiorimia' },
    { asset: 'images/panku-icon.png', twitter: 'flower_lynnn' },
    { asset: 'commissions/c2rt0.png', twitter: 'c2rt0' },
    { asset: 'commissions/tricksterbun.png', twitter: 'tricksterbun' },
    { asset: 'commissions/dess.png', twitter: '[redacted]' },
    { asset: 'commissions/enana.jpg', twitter: '[redacted]' },
    { asset: 'commissions/kutrly.png', twitter: '[redacted]' },
    { asset: 'commissions/kutrly2.png', twitter: '[redacted]' },
    { asset: 'commissions/flower2.png', twitter: 'flower_lynnn' },
    { asset: 'commissions/ganyuun.png', twitter: 'ganyuun' },
    { asset: 'commissions/_Crunnchy.png', twitter: '_Crunnchy' },
  ];
}

export default CommissionsComponent;
