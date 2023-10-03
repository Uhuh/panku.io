import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class SocialsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
