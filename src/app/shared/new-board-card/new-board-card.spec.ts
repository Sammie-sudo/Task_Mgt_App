import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBoardCard } from './new-board-card';

describe('NewBoardCard', () => {
  let component: NewBoardCard;
  let fixture: ComponentFixture<NewBoardCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewBoardCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBoardCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
