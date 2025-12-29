import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationCard } from './formation-card';

describe('FormationCard', () => {
  let component: FormationCard;
  let fixture: ComponentFixture<FormationCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
