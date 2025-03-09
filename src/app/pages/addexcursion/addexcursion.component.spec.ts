import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexcursionComponent } from './addexcursion.component';

describe('AddexcursionComponent', () => {
  let component: AddexcursionComponent;
  let fixture: ComponentFixture<AddexcursionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddexcursionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddexcursionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
