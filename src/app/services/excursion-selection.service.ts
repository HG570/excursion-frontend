import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExcursionSelectionService {
  private selectedExcursionId = new BehaviorSubject<number | null>(null);
  selectedExcursionId$ = this.selectedExcursionId.asObservable();

  setSelectedExcursionId(id: number | null) {
    this.selectedExcursionId.next(id);
  }
}
