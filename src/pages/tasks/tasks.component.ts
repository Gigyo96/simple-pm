import { Component } from '@angular/core';
import { TasksSection, TasksSectionComponent } from '../../components/tasks-section/tasks-section.component';
import { ChevronDownIcon, EllipsisIcon, LucideAngularModule, PlusIcon } from 'lucide-angular';

@Component({
  selector: 'app-tasks',
  imports: [TasksSectionComponent, LucideAngularModule],
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  host: {
    '(pointermove)': 'onPointerMove($event)',
    '(pointerup)': 'onPointerUp($event)',
    '(pointercancel)': 'onPointerUp($event)'
  }
})
export class TasksComponent {
  private _resizing = false;
  private _resizingParent: HTMLElement | null = null;
  private _boundUpdateSpacerVars = () => this.updateSpacerVars();
  private _activeSpacer: HTMLElement | null = null;
  private _boundPointerOver = (e: Event) => {
    const ev = e as PointerEvent;
    const target = (ev.target as HTMLElement) ?? null;
    const spacer = target?.closest?.('.spacer') as HTMLElement | null;
    if (spacer) this.updateSpacerVars(spacer);
  };
ChevronDownIcon = ChevronDownIcon;

  // pointerdown starts an explicit pointer-driven resize. We capture the pointer
  // so that moves outside the spacer still update the size. We set an inline
  // width on the parent (px) so it persists and won't be reset by layout.
  onPointerDown(event: PointerEvent) {
    const target = event.target as HTMLElement;
    const spacer = target.closest('.spacer') as HTMLElement | null;
    if (!spacer) return;

    const parent = spacer.parentElement as HTMLElement | null;
    if (!parent) return;

    event.preventDefault();
    (event.target as Element).setPointerCapture?.(event.pointerId);

    this._resizing = true;
    this._resizingParent = parent;
  this._activeSpacer = spacer;

    // Fix parent flex so inline width is respected
    parent.style.flex = '0 0 auto';

  // set initial CSS vars so the fixed line aligns with this spacer
  this.updateSpacerVars(spacer);
  }

  // pointermove updates the inline width while resizing
  onPointerMove(event: PointerEvent) {
    if (!this._resizing || !this._resizingParent) return;

    const parent = this._resizingParent;
    const rect = parent.getBoundingClientRect();
    const clientX = event.clientX ?? 0;

    const newWidth = Math.max(50, Math.min(2000, Math.round(clientX - rect.left)));
    parent.style.width = `${newWidth}px`;

  // update spacer line position while dragging
  this.updateSpacerVars(this._activeSpacer ?? null);
  }

  // pointerup ends the resize and releases capture
  onPointerUp(event: PointerEvent) {
    if (!this._resizing || !this._resizingParent) return;
    (event.target as Element).releasePointerCapture?.(event.pointerId);
    this._resizing = false;
    this._resizingParent = null;
  this._activeSpacer = null;
  }

  // compute and write CSS variables used by the spacer ::after
  private updateSpacerVars(spacer?: HTMLElement | null) {
    try {
      const el = spacer ?? document.querySelector('.spacer') as HTMLElement | null;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // left is the x coordinate at which the vertical line should be placed
      const left = `${Math.round(rect.left + rect.width / 2)}px`;
      // top is the y coordinate where the line should start (bottom of spacer)
      const top = `${Math.round(rect.bottom)}px`;
      document.documentElement.style.setProperty('--spacer-left', left);
      document.documentElement.style.setProperty('--spacer-top', top);
    } catch (e) {
      // noop
    }
  }

  // lifecycle hooks to keep vars up to date while user scrolls/resizes
  ngAfterViewInit(): void {
    // initialize and add listeners
    this.updateSpacerVars();
    window.addEventListener('resize', this._boundUpdateSpacerVars);
    window.addEventListener('scroll', this._boundUpdateSpacerVars, { passive: true });
  // pointerover keeps the line snapping to the hovered spacer
  document.addEventListener('pointerover', this._boundPointerOver);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this._boundUpdateSpacerVars);
    window.removeEventListener('scroll', this._boundUpdateSpacerVars);
  document.removeEventListener('pointerover', this._boundPointerOver);
  }

  PlusIcon = PlusIcon;


  sections: TasksSection[] = [
    { title: '📝 To Do', tasks: [{ title: 'Task 1' }, { title: 'Task 2' }] },
    { title: '🔧 In Progress', tasks: [{ title: 'Task 3' }] },
    { title: '✅ Done', tasks: [{ title: 'Task 4' }] },
  ];
}
