import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Import Material modules here
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ConditionsListComponent } from './components/conditions-list/conditions-list.component';
import { RuleEditorComponent } from './components/rule-editor/rule-editor.component';
import { RuleZoneComponent } from './components/rule-zone/rule-zone.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    ConditionsListComponent,
    RuleEditorComponent,
    RuleZoneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Required for Angular Material animations
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    DragDropModule,  
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
