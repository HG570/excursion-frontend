import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastMessage = new BehaviorSubject<{ message: string, type: string } | null>(null);

  show(message: string, type: string) {
    this.toastMessage.next({ message, type });
    setTimeout(() => this.toastMessage.next(null), 3000);
  }
}
