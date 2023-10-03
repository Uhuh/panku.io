import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-error',
  standalone: true,
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  pageEnter = new Date().toLocaleTimeString();
  now$ = interval(1000);
  now = new Date().toLocaleTimeString();
  route = '404';

  constructor(private readonly router: Router) {
    this.route = this.router.url;
  }
}

export default ErrorComponent;
