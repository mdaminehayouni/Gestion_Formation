import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheCard } from './affiche-card';

describe('AfficheCard', () => {
  let component: AfficheCard;
  let fixture: ComponentFixture<AfficheCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfficheCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
