import { Component } from '@angular/core';
import { TerminalComponent } from '../../shared/components/terminal/terminal.component';
import { SocialsComponent } from '../../shared/components/socials/socials.component';
import { ITerminalCommand } from '../../shared/components/terminal/terminal.interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [SocialsComponent, TerminalComponent, RouterLink],
})
export class HomeComponent {
  commands: ITerminalCommand[] = [
    {
      command: 'dylanwarren.dev --skills',
      indent: true,
      outputs: [
        {
          text: 'web',
          children: [
            { text: 'typescript@5.4.0' },
            { text: 'angular@21' },
            { text: 'react@19' },
            { text: 'node@24' },
            { text: 'html5' },
            { text: 'scss' },
            { text: 'css' },
          ],
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
          text: 'runescape',
          children: [
            { text: 'max-cape' },
            { text: 'completionist-cape' },
          ]
        },
      ],
    },
  ];
}

export default HomeComponent;
