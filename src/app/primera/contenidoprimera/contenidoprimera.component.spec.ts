import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoprimeraComponent } from './contenidoprimera.component';

describe('ContenidoprimeraComponent', () => {
  let component: ContenidoprimeraComponent;
  let fixture: ComponentFixture<ContenidoprimeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoprimeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoprimeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
