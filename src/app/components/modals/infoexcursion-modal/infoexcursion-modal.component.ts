import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ToastService } from '../../../services/toast.service';
import { ExcursionSelectionService } from '../../../services/excursion-selection.service';

@Component({
  selector: 'app-infoexcursion-modal',
  imports: [],
  templateUrl: './infoexcursion-modal.component.html',
  styleUrl: './infoexcursion-modal.component.scss'
})
export class InfoexcursionModalComponent {
  @Input() excursionId: number | null = null;
  @Input() excursionData: any = null;

  constructor(private apiService: ApiService, private toastService: ToastService, private excursionSelectionService: ExcursionSelectionService, private cdr: ChangeDetectorRef) {}

  ngOnChanges() {
    if (this.excursionId) {
      this.getExcursion(this.excursionId);
    }
  }

  setSelectedExcursionId(id: number | null) {
    this.excursionSelectionService.setSelectedExcursionId(id);
  }

  getExcursion(id: number) {
    this.excursionData;
    this.cdr.detectChanges();
  }
}
