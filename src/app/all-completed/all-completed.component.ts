import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-all-completed',
  templateUrl: './all-completed.component.html',
})
export class AllCompletedComponent {
  @Input() remainingTodosCount: number | null = null;
}
