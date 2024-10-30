import { Component } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { RuleEngine } from '../../condition/rule-engine';
import { Condition, conditions } from '../../condition/conditions';

@Component({
  selector: 'app-rule-editor',
  template: `
    <div cdkDropListGroup class="editor-container">
      <h2>Rule Editor</h2>
      <div class="columns">
        <div class="column">
          <h3>Available Conditions</h3>
          <div
            cdkDropList
            [cdkDropListData]="availableConditions"
            (cdkDropListDropped)="handleDrop($event)"
            class="conditions-list"
          >
            <div *ngFor="let condition of availableConditions" cdkDrag class="condition-item">
              {{ condition.title }}
            </div>
          </div>
        </div>
        <div class="column">
          <h3>Selected Rule</h3>
          <div
            cdkDropList
            [cdkDropListData]="selectedConditions"
            (cdkDropListDropped)="handleDrop($event)"
            class="drop-zone"
          >
            <div *ngFor="let condition of selectedConditions" cdkDrag class="condition-item">
              {{ condition.title }}
            </div>
          </div>
        </div>
      </div>
      <button (click)="evaluateRule()">Evaluate Rule</button>
      <div *ngIf="evaluationResult" class="result">
        <p *ngIf="evaluationResult.success" class="success">All conditions passed!</p>
        <ul *ngIf="!evaluationResult.success">
          <li *ngFor="let msg of evaluationResult.messages" class="error">{{ msg }}</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .error {
      color: red;
    }
    .editor-container {
      padding: 20px;
      max-width: 600px;
      margin: auto;
    }
    .columns {
      display: flex;
      justify-content: space-between;
    }
    .column {
      width: 45%;
    }
    .conditions-list, .drop-zone {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 8px;
      min-height: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #f9f9f9;
    }
    .condition-item {
      padding: 8px;
      margin: 4px 0;
      background-color: #e0e0e0;
      border-radius: 4px;
      cursor: move;
      width: 100%;
      text-align: center;
    }
    .result {
      margin-top: 20px;
    }
    .success {
      color: green;
      font-weight: bold;
    }
    button {
      margin-top: 20px;
      padding: 8px 16px;
      background-color: #007bff;
      border: none;
      color: white;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class RuleEditorComponent {
  availableConditions: Condition[] = conditions;

  selectedConditions: Condition[] = [];
  evaluationResult: { success: boolean; messages: string[] } | null = null;

  handleDrop(event: CdkDragDrop<Condition[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  evaluateRule() {
    const ruleEngine = new RuleEngine(this.selectedConditions); // Adjust as per your logic
    this.evaluationResult = ruleEngine.evaluateAll();
  }
}