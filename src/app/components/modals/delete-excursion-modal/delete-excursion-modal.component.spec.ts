import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteExcursionModalComponent } from './delete-excursion-modal.component';

describe('DeleteExcursionModalComponent', () => {
  let component: DeleteExcursionModalComponent;
  let fixture: ComponentFixture<DeleteExcursionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteExcursionModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteExcursionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
