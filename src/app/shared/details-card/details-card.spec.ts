import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCard } from './details-card';

describe('DetailsCard', () => {
  let component: DetailsCard;
  let fixture: ComponentFixture<DetailsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
