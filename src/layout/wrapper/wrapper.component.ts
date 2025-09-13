import { Component, signal, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-wrapper',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  standalone: true,
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss',
})
export class WrapperComponent {
  // collapsed = true/false; use signal for template binding
  isSidebarCollapsed = signal(false);

  @ViewChild(SidebarComponent)
  sidebarComponent!: SidebarComponent;

  onToggleSidebar() {
    this.isSidebarCollapsed.update((v) => !v);
    this.sidebarComponent.toggle();
  }
}
