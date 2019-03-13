import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyadircardComponent } from './anyadircard.component';

describe('AnyadircardComponent', () => {
  let component: AnyadircardComponent;
  let fixture: ComponentFixture<AnyadircardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnyadircardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyadircardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
