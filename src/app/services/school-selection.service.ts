import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SchoolSelectionService {
  private selectedSchoolId = new BehaviorSubject<number | null>(null);
  selectedSchoolId$ = this.selectedSchoolId.asObservable();

  setSelectedSchoolId(id: number | null) {
    this.selectedSchoolId.next(id);
  }
}
