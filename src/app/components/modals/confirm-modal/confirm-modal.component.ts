import { Component, Input } from '@angular/core';
import { ToastService } from '../../../services/toast.service';
import { ApiService } from '../../../services/api.service';
import { SchoolSelectionService } from '../../../services/school-selection.service';

@Component({
  selector: 'app-confirm-modal',
  imports: [],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.scss'
})
export class ConfirmModalComponent {
  @Input() schoolId: number | null = null;
  @Input() deleteSchool!: (id: number | null) => void;

  constructor(private apiService: ApiService, private toastService: ToastService, private schoolSelectionService: SchoolSelectionService) { 
    this.schoolSelectionService.selectedSchoolId$.subscribe((id) => {
      this.schoolId = id;
    });
  }
  delete() {
    console.log(this.schoolId);
    if (this.schoolId !== null) {
      this.apiService.deleteSchool(this.schoolId).subscribe({
        next: (response) => {
          if (this.deleteSchool) {
            this.deleteSchool(this.schoolId);
          }
          this.toastService.show('Escola deletada!', 'success');
        },
        error: (err) => this.toastService.show('Erro ao deletar escola!', 'error')
      })
    }
  }
}
