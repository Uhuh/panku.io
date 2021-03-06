import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.scss'],
})
export class TimestampComponent implements OnInit {
  now = new Date().toLocaleTimeString();

  constructor() {}

  ngOnInit(): void {}
}
