import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTempoComponent } from './card-tempo.component';

describe('CardTempoComponent', () => {
  let component: CardTempoComponent;
  let fixture: ComponentFixture<CardTempoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTempoComponent]
    });
    fixture = TestBed.createComponent(CardTempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
