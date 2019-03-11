import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPrecioComponent } from './cards-precio.component';

describe('CardsPrecioComponent', () => {
  let component: CardsPrecioComponent;
  let fixture: ComponentFixture<CardsPrecioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsPrecioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
