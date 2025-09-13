import { Component, EventEmitter, Output } from '@angular/core';
import { Hamburger, LucideAngularModule, MenuIcon } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  MenuIcon = MenuIcon;
  @Output() toggleSidebar = new EventEmitter<void>();

  onToggle() {
    this.toggleSidebar.emit();
  }
}
