import { Component } from '@angular/core';
import { TerminalComponent } from '../../shared/components/terminal/terminal.component';
import { SocialsComponent } from '../../shared/components/socials/socials.component';
import { ITerminalCommand } from '../../shared/components/terminal/terminal.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [SocialsComponent, TerminalComponent],
})
export class HomeComponent {
  commands: ITerminalCommand[] = [
    {
      command: 'panku.io --skills',
      indent: true,
      outputs: [
        {
          text: 'typescript@5.1.0',
          children: [
            { text: 'angular@16' },
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
}

export default HomeComponent;
