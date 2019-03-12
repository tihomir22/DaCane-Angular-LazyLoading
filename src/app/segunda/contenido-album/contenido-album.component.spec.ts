import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoAlbumComponent } from './contenido-album.component';

describe('ContenidoAlbumComponent', () => {
  let component: ContenidoAlbumComponent;
  let fixture: ComponentFixture<ContenidoAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
