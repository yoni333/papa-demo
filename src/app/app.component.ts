import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Condition } from './condition/conditions';

@Component({
  selector: 'app-root',
 
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'papa-akif-rule-engine-angular';
  onDrop(event: CdkDragDrop<Condition[]>) {
    console.log(event)}
}
