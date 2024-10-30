import { Component, Input } from '@angular/core';
import { Condition } from '../../condition/conditions';

@Component({
  selector: 'app-conditions-list',
  template: `
    <div cdkDropList [cdkDropListData]="conditions" class="conditions-list">
      <div *ngFor="let condition of conditions" cdkDrag class="condition-item">
        {{ condition.title }}
      </div>
    </div>
  `,
  styles: [`
    .conditions-list {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 8px;
      max-width: 300px;
    }
    .condition-item {
      padding: 8px;
      margin: 4px 0;
      background-color: #e0e0e0;
      border-radius: 4px;
      cursor: move;
    }
  `]
})
export class ConditionsListComponent {
  @Input() conditions: Condition[] = [];
}
