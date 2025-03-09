import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListexcursionComponent } from './listexcursion.component';

describe('ListexcursionComponent', () => {
  let component: ListexcursionComponent;
  let fixture: ComponentFixture<ListexcursionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListexcursionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListexcursionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
