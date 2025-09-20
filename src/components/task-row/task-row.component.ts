import { Component, Input } from '@angular/core';
import { ArrowDown, ArrowDownUpIcon, CheckCircleIcon, ChevronRightIcon, LucideAngularComponent, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-task-row',
  imports: [LucideAngularModule],
  standalone: true,
  templateUrl: './task-row.component.html',
  styleUrl: './task-row.component.scss'
})
export class TaskRowComponent {
  @Input() task!: { title: string };
  CheckCircleIcon = CheckCircleIcon;
  ArrowDownUpIcon = ArrowDownUpIcon;
  ChevronRightIcon = ChevronRightIcon;

}
