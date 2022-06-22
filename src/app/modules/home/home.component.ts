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
        { content: '' },
        { content: 'typescript@4.6.0', cssClass: 'tree-branch' },
        { content: 'angular@14', cssClass: 'indent-tree-branch' },
        { content: 'node@17', cssClass: 'indent-tree-branch' },
        { content: 'react', cssClass: 'indent-end-tree' },
        { content: 'html5', cssClass: 'tree-branch' },
        { content: 'css', cssClass: 'indent-tree-branch' },
        { content: 'scss', cssClass: 'indent-end-tree' },
        { content: 'databases', cssClass: 'tree-branch' },
        { content: 'postgres', cssClass: 'indent-tree-branch' },
        { content: 'mongodb', cssClass: 'indent-tree-branch' },
        { content: 'ms-sql-server', cssClass: 'indent-end-tree' },
        { content: 'version-control', cssClass: 'tree-branch' },
        { content: 'git', cssClass: 'indent-tree-branch' },
        { content: 'azure', cssClass: 'indent-end-tree' },
        { content: 'runescape', cssClass: 'end-tree' },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
