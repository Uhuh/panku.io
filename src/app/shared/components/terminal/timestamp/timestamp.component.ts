import { Component } from '@angular/core';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.scss'],
  standalone: true,
})
export class TimestampComponent {
  now = new Date().toLocaleTimeString();
}
