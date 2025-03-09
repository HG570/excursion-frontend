import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoexcursionModalComponent } from './infoexcursion-modal.component';

describe('InfoexcursionModalComponent', () => {
  let component: InfoexcursionModalComponent;
  let fixture: ComponentFixture<InfoexcursionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoexcursionModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoexcursionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
