import { Component, Input, OnInit } from '@angular/core';

export interface OutputsOptions {
  content: string;
  cssClass?: string;
}

export interface TerminalCommand {
  command: string;
  outputs: OutputsOptions[];
}

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
})
export class TerminalComponent implements OnInit {
  @Input() commands: TerminalCommand[] = [];

  constructor() {}

  ngOnInit(): void {}
}
