import { Component } from '@angular/core';
import {
  ActivityIcon,
  AlarmClockIcon,
  BellIcon,
  CalendarIcon,
  CheckCircleIcon,
  LucideAngularModule,
} from 'lucide-angular';

@Component({
  selector: 'app-home',
  imports: [LucideAngularModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  ActivityIcon = ActivityIcon;
  AlarmClockIcon = AlarmClockIcon;
  BellIcon = BellIcon;
  CalendarIcon = CalendarIcon;
  CheckCircleIcon = CheckCircleIcon;
}
