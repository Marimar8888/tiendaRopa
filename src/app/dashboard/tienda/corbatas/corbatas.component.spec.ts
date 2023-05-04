import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorbatasComponent } from './corbatas.component';

describe('CorbatasComponent', () => {
  let component: CorbatasComponent;
  let fixture: ComponentFixture<CorbatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorbatasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorbatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
