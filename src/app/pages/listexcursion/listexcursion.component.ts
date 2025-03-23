import { ChangeDetectorRef, Component } from '@angular/core';
import { InfoexcursionModalComponent } from "../../components/modals/infoexcursion-modal/infoexcursion-modal.component";
import { EditexcursionModalComponent } from "../../components/modals/editexcursion-modal/editexcursion-modal.component";
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../services/toast.service';
import { NgFor } from '@angular/common';
import { BackComponent } from '../../components/buttons/back/back.component';
import { DeleteExcursionModalComponent } from "../../components/modals/delete-excursion-modal/delete-excursion-modal.component";

@Component({
  selector: 'app-listexcursion',
  imports: [BackComponent, InfoexcursionModalComponent, EditexcursionModalComponent, NgFor, DeleteExcursionModalComponent],
  templateUrl: './listexcursion.component.html',
  styleUrl: './listexcursion.component.scss'
})
export class ListexcursionComponent {
excursions: any[] = [];
selectedExcursionId: number | null = null;
excursionData: any = null;

  constructor(private toastService: ToastService, private apiService: ApiService, private cdr: ChangeDetectorRef) { }

  setSelectedExcursionId(id: number) {
    this.selectedExcursionId = id;
    this.loadExcursion(id);
  }

  loadExcursion(id: number) {
    this.apiService.getExcursion(id).subscribe(data => {
      this.excursionData = data;
    });
  }

  loadExcursions() {
    this.apiService.getAllExcursion().subscribe(data => {
      this.excursions = data;
      this.cdr.detectChanges();
    });
  }

  ngOnInit() {
    this.loadExcursions();
  }
  
  reloadExcursions() {
    this.loadExcursions();
  }
}
