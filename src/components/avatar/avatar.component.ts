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
  @Input() initials: string = 'AB';
  @Input() color: string = '#000000';

  contrastingColor: string = '#FFFFFF';

  ngOnChanges() {
    this.contrastingColor = this.computeContrastingColor();
  }

  @Output() avatarClick = new EventEmitter<void>();
  onAvatarClick() {
    this.avatarClick.emit();
  }

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
  computeContrastingColor() {
    const color = this.color;
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? '#000000' : '#FFFFFF';
  }
}
