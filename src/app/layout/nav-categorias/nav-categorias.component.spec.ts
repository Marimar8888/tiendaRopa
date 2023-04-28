import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCategoriasComponent } from './nav-categorias.component';

describe('NavCategoriasComponent', () => {
  let component: NavCategoriasComponent;
  let fixture: ComponentFixture<NavCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
