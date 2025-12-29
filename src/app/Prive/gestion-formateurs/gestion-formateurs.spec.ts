import { ComponentFixture, TestBed } from '@angular/core/testing';

import { gestion_formateurs } from './gestion-formateurs';

describe('GestionFormateurs', () => {
  let component: gestion_formateurs;
  let fixture: ComponentFixture<gestion_formateurs>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [gestion_formateurs],
    }).compileComponents();

    fixture = TestBed.createComponent(gestion_formateurs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
