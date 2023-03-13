import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ITerminalCommand } from 'src/app/shared/components/terminal/terminal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  commands: ITerminalCommand[] = [
    {
      command: 'panku.io --skills',
      indent: true,
      outputs: [
        {
          text: 'typescript@4.8.0',
          children: [
            { text: 'angular@15' },
            { text: 'node@18' },
            { text: 'react' },
            { text: 'nextjs' },
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

  ngOnInit(): void { }
}
