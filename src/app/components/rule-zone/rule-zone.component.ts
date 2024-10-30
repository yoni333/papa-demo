import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Condition } from '../../condition/conditions';

@Component({
  selector: 'app-rule-zone',
  template: `
    <div
      cdkDropList
      [cdkDropListData]="selectedConditions"
      (cdkDropListDropped)="onDrop($event)"
      class="drop-zone"
    >
      <p *ngIf="!selectedConditions.length">Drop conditions here to create a rule</p>
      <div *ngFor="let condition of selectedConditions" cdkDrag class="condition-item">
        {{ condition.title }}
      </div>
    </div>
  `,
  styles: [`
    .drop-zone {
      padding: 10px;
      min-height: 100px;
      border: 2px dashed #aaa;
      border-radius: 8px;
      background-color: #f9f9f9;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .condition-item {
      padding: 8px;
      margin: 4px 0;
      background-color: #d0e0f0;
      border-radius: 4px;
      width: 100%;
      text-align: center;
    }
  `]
})
export class RuleZoneComponent {
  @Input() selectedConditions: Condition[] = [];
  @Output() dropEvent = new EventEmitter<CdkDragDrop<Condition[]>>();

  onDrop(event: CdkDragDrop<Condition[]>) {
    this.dropEvent.emit(event);
  }
}
