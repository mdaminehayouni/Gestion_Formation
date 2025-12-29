import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireFormateur } from './formulaire-formateur';

describe('FormulaireFormateur', () => {
  let component: FormulaireFormateur;
  let fixture: ComponentFixture<FormulaireFormateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireFormateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireFormateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
