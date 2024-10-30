import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleZoneComponent } from './rule-zone.component';

describe('RuleZoneComponent', () => {
  let component: RuleZoneComponent;
  let fixture: ComponentFixture<RuleZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuleZoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RuleZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
