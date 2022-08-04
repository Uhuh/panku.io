import { Component, Input, OnInit } from '@angular/core';

export interface ITerminalNode {
  text: string;
  children?: ITerminalNode[];
}

export interface TerminalCommand {
  command: string;
  outputs: ITerminalNode[];
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
