import { Component, OnInit } from '@angular/core';
import { TerminalCommand } from 'src/app/shared/components/terminal/terminal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  commands: TerminalCommand[] = [
    {
      command: 'panku.io --skills',
      outputs: [
        {
          text: 'typescript@4.6.0',
          children: [
            { text: 'angular@14' },
            { text: 'node@17' },
            { text: 'react' },
          ],
        },
        {
          text: 'html5',
          children: [{ text: 'css' }, { text: 'scss' }],
        },
        {
          text: 'databases',
          children: [
            { text: 'postgres' },
            { text: 'mongodb' },
            { text: 'ms-sql-server' },
          ],
        },
        {
          text: 'version-control',
          children: [{ text: 'git' }, { text: 'azure' }],
        },
        {
          text: 'runescape',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
