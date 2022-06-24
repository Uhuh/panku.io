import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
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

  constructor(private readonly meta: Meta) {
    this.meta.addTags(
      [
        {
          name: 'description',
          content: 'Heyo! The names Dylan. I do cool front-end stuff.',
        },
        {
          name: 'viewport',
          content: 'width=device-width, intia-scale=1',
        },
        {
          name: 'robots',
          content: 'INDEX, FOLLOW',
        },
        { name: 'author', content: 'Dylan Warren' },
        {
          name: 'keywords',
          content: 'Typescript, Angular, Panku, Fullstack',
        },
        {
          property: 'og:title',
          content: 'Dylan Warren | Home',
        },
        { property: 'og:type', content: 'website' },
        { charset: 'UTF-8' },
      ],
      true
    );
  }

  ngOnInit(): void {}
}
