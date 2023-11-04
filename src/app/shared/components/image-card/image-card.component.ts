import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent {
  @Input({ required: true }) asset!: string;
}
