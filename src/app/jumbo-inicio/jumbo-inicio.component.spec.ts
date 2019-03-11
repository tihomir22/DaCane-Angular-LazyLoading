import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboInicioComponent } from './jumbo-inicio.component';

describe('JumboInicioComponent', () => {
  let component: JumboInicioComponent;
  let fixture: ComponentFixture<JumboInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumboInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
