import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListschoolComponent } from './listschool.component';

describe('ListschoolComponent', () => {
  let component: ListschoolComponent;
  let fixture: ComponentFixture<ListschoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListschoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
