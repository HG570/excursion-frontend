import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoschoolModalComponent } from './infoschool-modal.component';

describe('InfoschoolModalComponent', () => {
  let component: InfoschoolModalComponent;
  let fixture: ComponentFixture<InfoschoolModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoschoolModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoschoolModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
