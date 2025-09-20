import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  BellIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  GlobeIcon,
  HomeIcon,
  LucideAngularModule,
  LucideIconData,
  LucideIcons,
  PlusIcon,
  SettingsIcon,
} from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  imports: [LucideAngularModule, RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  public visible = true;
  PlusIcon = PlusIcon;
  CheckCircleIcon = CheckCircleIcon;
  HomeIcon = HomeIcon;
  BellIcon = BellIcon;
  ChevronDownIcon = ChevronDownIcon;
  GearIcon = SettingsIcon;

  toggle() {
    this.visible = !this.visible;
  }

  projects: {
    id: number;
    name: string;
    icon: LucideIconData;
    color: string;
  }[] = [
    { id: 1, name: 'Project Aurora', icon: GlobeIcon, color: '#4682B4' }, // steel blue
    { id: 2, name: 'Neptune Initiative', icon: PlusIcon, color: '#3CB371' }, // medium sea green
    { id: 3, name: 'Solaris Venture', icon: GlobeIcon, color: '#FFD700' }, // gold
    { id: 4, name: 'Atlas Development', icon: PlusIcon, color: '#FF6347' }, // tomato red
    { id: 5, name: 'Orion Expansion', icon: GlobeIcon, color: '#6A5ACD' }, // slate blue
  ];
}
