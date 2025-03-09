import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditexcursionModalComponent } from './editexcursion-modal.component';

describe('EditexcursionModalComponent', () => {
  let component: EditexcursionModalComponent;
  let fixture: ComponentFixture<EditexcursionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditexcursionModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditexcursionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
