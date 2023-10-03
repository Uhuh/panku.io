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
