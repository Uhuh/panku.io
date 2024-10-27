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
      command: 'panku.dev --skills',
      indent: true,
      outputs: [
        {
          text: 'typescript@5.4.0',
          children: [
            { text: 'angular@18' },
            { text: 'node@20' },
          ],
        },
        {
          text: 'html5',
          children: [{ text: 'css' }, { text: 'scss' }],
        },
        {
          text: 'systems',
          children: [{ text: 'rust' }],
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
}

export default HomeComponent;
