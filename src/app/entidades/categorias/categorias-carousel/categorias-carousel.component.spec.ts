import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasCarouselComponent } from './categorias-carousel.component';

describe('CategoriasCarouselComponent', () => {
  let component: CategoriasCarouselComponent;
  let fixture: ComponentFixture<CategoriasCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriasCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
