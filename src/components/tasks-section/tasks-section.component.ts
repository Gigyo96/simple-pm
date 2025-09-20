import { Component, Input } from '@angular/core';
import { ChevronDownIcon, EllipsisIcon, LucideAngularModule, PlusIcon } from 'lucide-angular';
import { TaskRowComponent } from '../task-row/task-row.component';

export type TasksSection = {
  title: string;
  tasks?: { title: string }[];
};

@Component({
  selector: 'app-tasks-section',
  imports: [LucideAngularModule, TaskRowComponent],
  standalone: true,
  templateUrl: './tasks-section.component.html',
  styleUrl: './tasks-section.component.scss',
})
export class TasksSectionComponent {

  @Input() tasksSection!: TasksSection;
  ChevronDownIcon = ChevronDownIcon;
  EllipsisIcon = EllipsisIcon;
  PlusIcon = PlusIcon;
}
