import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  readonly #router = inject(Router);
  readonly now = new Date().toLocaleTimeString();
  readonly route = this.#router.url;
}

export default ErrorComponent;
