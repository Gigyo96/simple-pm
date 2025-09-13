import { Component } from '@angular/core';
import {
  GlobeIcon,
  LucideAngularModule,
  LucideIconData,
  LucideIcons,
  PlusIcon,
} from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  imports: [LucideAngularModule],
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  public visible = true;
  PlusIcon = PlusIcon;

  GlobeIcon = GlobeIcon;

  toggle() {
    this.visible = !this.visible;
  }

  projects: {
    name: string;
    icon: LucideIconData;
    color: string;
  }[] = [
    { name: 'Project Aurora', icon: GlobeIcon, color: '#4682B4' }, // steel blue
    { name: 'Neptune Initiative', icon: PlusIcon, color: '#3CB371' }, // medium sea green
    { name: 'Solaris Venture', icon: GlobeIcon, color: '#FFD700' }, // gold
    { name: 'Atlas Development', icon: PlusIcon, color: '#FF6347' }, // tomato red
    { name: 'Orion Expansion', icon: GlobeIcon, color: '#6A5ACD' }, // slate blue
  ];
}
