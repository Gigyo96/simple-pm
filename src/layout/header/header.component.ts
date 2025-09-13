import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import {
  ChevronDownIcon,
  Hamburger,
  LucideAngularModule,
  MenuIcon,
  PlusIcon,
  SearchIcon,
  View,
} from 'lucide-angular';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { AvatarMenuComponent } from '../../components/avatar-menu/avatar-menu.component';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, AvatarComponent, AvatarMenuComponent],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  MenuIcon = MenuIcon;
  ChevronDownIcon = ChevronDownIcon;
  PlusIcon = PlusIcon;
  SearchIcon = SearchIcon;

  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  @Output() toggleSidebar = new EventEmitter<void>();

  onToggle() {
    this.toggleSidebar.emit();
  }
}
