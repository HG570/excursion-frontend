import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditschoolModalComponent } from './editschool-modal.component';

describe('EditschoolModalComponent', () => {
  let component: EditschoolModalComponent;
  let fixture: ComponentFixture<EditschoolModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditschoolModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditschoolModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
