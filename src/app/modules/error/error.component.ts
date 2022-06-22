import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  pageEnter = new Date().toLocaleTimeString();
  now$ = interval(1000);
  now = new Date().toLocaleTimeString();
  route = '404';

  constructor(private readonly router: Router) {
    this.route = this.router.url;
    this.now$.subscribe(() => (this.now = new Date().toLocaleTimeString()));
  }

  ngOnInit(): void {}
}
