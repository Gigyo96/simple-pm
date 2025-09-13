import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [],
  standalone: true,
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  get avatarClass(): string {
    switch (this.size) {
      case 'sm':
        return 'avatar-sm';
      case 'lg':
        return 'avatar-lg';
      default:
        return 'avatar-md';
    }
  }
}
