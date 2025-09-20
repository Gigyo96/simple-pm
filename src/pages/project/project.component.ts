import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  CheckCircleIcon,
  DotIcon,
  EllipsisIcon,
  LucideAngularModule,
  Share2Icon,
} from 'lucide-angular';
import { AvatarComponent } from '../../components/avatar/avatar.component';

@Component({
  selector: 'app-project',
  imports: [RouterOutlet, LucideAngularModule, AvatarComponent],
  standalone: true,
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  Share2Icon = Share2Icon;
  EllipsisIcon = EllipsisIcon;
  CheckCircleIcon = CheckCircleIcon;
  maxVisible = 5;

  projectMembers = [
    { name: 'Alice Johnson', initials: 'AJ', color: '#FF5733' }, // Red
    { name: 'Bob Smith', initials: 'BS', color: '#33C1FF' }, // Blue
    { name: 'Charlie Brown', initials: 'CB', color: '#33FF57' }, // Green
    { name: 'Diana Prince', initials: 'DP', color: '#FF33A8' }, // Pink
    { name: 'Ethan Hunt', initials: 'EH', color: '#FFC300' }, // Yellow
    { name: 'Fiona Gallagher', initials: 'FG', color: '#8E44AD' }, // Purple
    { name: 'George Miller', initials: 'GM', color: '#2ECC71' }, // Emerald
    { name: 'Hannah Lee', initials: 'HL', color: '#E67E22' }, // Orange
    { name: 'Ivan Petrov', initials: 'IP', color: '#1ABC9C' }, // Teal
    { name: 'Julia Roberts', initials: 'JR', color: '#C0392B' }, // Crimson
    { name: 'Kevin Nguyen', initials: 'KN', color: '#3498DB' }, // Azure
    { name: 'Laura Martinez', initials: 'LM', color: '#9B59B6' }, // Violet
    { name: 'Michael Chen', initials: 'MC', color: '#F1C40F' }, // Gold
    { name: 'Nora Davis', initials: 'ND', color: '#16A085' }, // Sea Green
    { name: 'Oscar Alvarez', initials: 'OA', color: '#34495E' }, // Slate
  ];

  projectViews = [
    { name: 'Task List', icon: CheckCircleIcon },
    { name: 'Board', icon: Share2Icon },
    { name: 'Calendar', icon: CheckCircleIcon },
    { name: 'Files', icon: Share2Icon },
    { name: 'Activity', icon: CheckCircleIcon },
  ];
  activeViewIndex = 0;
  onViewSelect(index: number) {
    this.activeViewIndex = index;
    console.log(`Selected view: ${this.projectViews[index].name}`);
  }
}
