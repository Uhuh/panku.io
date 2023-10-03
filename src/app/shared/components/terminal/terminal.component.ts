import { Component, Input, OnInit } from '@angular/core';
import { TimestampComponent } from './timestamp/timestamp.component';
import { NgClass, NgFor } from '@angular/common';

export interface ITerminalNode {
  text: string;
  children?: ITerminalNode[];
}

export interface ITerminalCommand {
  command: string;
  indent?: boolean;
  outputs: ITerminalNode[];
  exec?: () => unknown;
}

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
  standalone: true,
  imports: [
    NgFor,
    TimestampComponent,
    NgClass,
  ],
})
export class TerminalComponent implements OnInit {
  @Input() commands: ITerminalCommand[] = [];

  userCommands: ITerminalCommand[] = [];
  private easterEggCommands: ITerminalCommand[] = [
    {
      command: 'ls',
      indent: false,
      outputs: [
        {
          text: 'panku.io rolebot-dashboard RoleBot ZGlkIHlvdSByZWFsbHkgZGVjaWRlIHRvIGNoZWNrIHRoaXMgb3V0PyBMbWFv',
        },
      ],
    },
    {
      command: 'clear',
      indent: false,
      exec: () => (this.userCommands.length = 0),
      outputs: [],
    },
    {
      command: 'ping',
      indent: false,
      exec: async () => {
        const pings = [0, 1, 2, 3, 4, 5].map(
          (i) =>
            `64 bytes from 8.8.8.8: icmp_seq=${i + 1} ttl=113 time=${Math.floor(
              Math.random() * 256
            )}.0 ms`
        );

        this.easterEggCommands[2].outputs.push({
          text: 'PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.',
        });

        for (const ping of pings) {
          await new Promise((r) => setTimeout(() => r(1), 1000));
          // magic numbers
          this.easterEggCommands[2].outputs.push({ text: ping });
        }

        const pingInfo = [
          '--- 8.8.8.8 ping statistics ---',
          '6 packets transmitted, 6 received, 0% packet loss, time 5007ms',
        ];

        pingInfo.map((p) =>
          this.easterEggCommands[2].outputs.push({
            text: p,
          })
        );
      },
      outputs: [
        {
          text: '',
        },
      ],
    },
    {
      command: 'help',
      outputs: [{ text: 'clear, help, ls, ping' }],
    },
  ];

  constructor() {}

  failedCommand = (input: string) => `panku.io: command not found: ${input}`;

  ngOnInit(): void {}

  addInput(input: any) {
    const text = input.target.value;

    if (!text || !text.length) {
      return;
    }

    const command =
      this.easterEggCommands.find((c) => c.command === text) ??
      ({
        command: text,
        indent: false,
        outputs: [{ text: this.failedCommand(text) }],
      } as ITerminalCommand);

    input.target.value = '';
    this.userCommands.push(command);

    if (command.exec) {
      return command.exec();
    }
  }
}
