import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-error',
  standalone: true,
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  imports: [
    AsyncPipe,
    DatePipe
  ]
})
export class ErrorComponent {
  now = new Date().toLocaleTimeString();
  route = this.router.url;

  constructor(private readonly router: Router) {}
}

export default ErrorComponent;
