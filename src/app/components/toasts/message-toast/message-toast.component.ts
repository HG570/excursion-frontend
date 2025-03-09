import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../services/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-toast',
  imports: [
    CommonModule

  ],
  templateUrl: './message-toast.component.html',
  styleUrl: './message-toast.component.scss'
})
export class MessageToastComponent implements OnInit {
  message: string = '';
  type: string = '';

  constructor(public toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.toastMessage.subscribe(toast => {
      if (toast) {
        this.message = toast.message;
        this.type = toast.type;
      } else {
        this.message = '';
        this.message = '';
      }
    });
  }

  getToastClass(): string {
    switch (this.type) {
      case 'error': return 'text-bg-danger';
      case 'success': return 'text-bg-success';
      case 'warning': return 'text-bg-warning';
      default: return '';
    }
  }

  getButtonClass(): string {
    switch (this.type) {
      case 'error': return 'btn-close-white';
      case 'success': return 'btn-close-white';
      case 'warning': return 'btn-close-white';
      default: return '';
    }
  }
}

// (click)="showSuccess()"