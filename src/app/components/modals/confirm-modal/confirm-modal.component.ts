import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastService } from '../../../services/toast.service';
import { ApiService } from '../../../services/api.service';
import { SchoolSelectionService } from '../../../services/school-selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-modal',
  imports: [],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.scss'
})
export class ConfirmModalComponent {
  @Input() schoolId: number | null = null;
  @Output() reloadSchools = new EventEmitter<void>();

  constructor(private apiService: ApiService, private router: Router, private toastService: ToastService, private schoolSelectionService: SchoolSelectionService) { 
    this.schoolSelectionService.selectedSchoolId$.subscribe((id) => {
      this.schoolId = id;
    });
  }
  delete() {
    console.log(this.schoolId);
    if (this.schoolId !== null) {
      this.apiService.deleteSchool(this.schoolId).subscribe({
        next: (response) => {
          this.reloadSchools.emit();
          this.toastService.show('Escola deletada!', 'success');
        },
        error: (err) => this.toastService.show('Erro ao deletar escola!', 'error')
      })
    }
    this.router.navigate(['/lista-escolas']);
  }
}
