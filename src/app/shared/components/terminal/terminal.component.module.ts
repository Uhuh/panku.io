import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TerminalComponent } from './terminal.component';
import { TimestampComponent } from './timestamp/timestamp.component';

@NgModule({
  declarations: [TerminalComponent, TimestampComponent],
  imports: [CommonModule],
  exports: [TerminalComponent],
})
export class TerminalModule {}
