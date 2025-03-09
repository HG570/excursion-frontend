import { Component, Input } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ToastService } from '../../../services/toast.service';
import { ExcursionSelectionService } from '../../../services/excursion-selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-excursion-modal',
  imports: [],
  templateUrl: './delete-excursion-modal.component.html',
  styleUrl: './delete-excursion-modal.component.scss'
})
export class DeleteExcursionModalComponent {
  @Input() excursionId: number | null = null;

  constructor(private apiService: ApiService, private router: Router, private toastService: ToastService, private excursionSelectionService: ExcursionSelectionService) { 
    this.excursionSelectionService.selectedExcursionId$.subscribe((id) => {
      this.excursionId = id;
    });
  }
  delete() {
    console.log(this.excursionId);
    if (this.excursionId !== null) {
      this.apiService.deleteExcursion(this.excursionId).subscribe({
        next: (response) => {
          this.toastService.show('Excursão deletada!', 'success');
        },
        error: (err) => this.toastService.show('Erro ao deletar excursão!', 'error')
      })
    }
    this.router.navigate(['/lista-excursoes']);
  }
}
