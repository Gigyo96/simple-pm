import { Component } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import {
  LogOutIcon,
  LucideAngularModule,
  SettingsIcon,
  UserCircleIcon,
} from 'lucide-angular';

@Component({
  selector: 'div[app-avatar-menu]',
  exportAs: 'avatarMenu',
  imports: [AvatarComponent, LucideAngularModule],
  standalone: true,
  templateUrl: './avatar-menu.component.html',
  styleUrl: './avatar-menu.component.scss',
})
export class AvatarMenuComponent {
  SettingsIcon = SettingsIcon;
  LogOutIcon = LogOutIcon;
  UserCircleIcon = UserCircleIcon;
}
