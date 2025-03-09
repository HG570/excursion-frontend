import { Component, Input } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ToastService } from '../../../services/toast.service';
import { SchoolSelectionService } from '../../../services/school-selection.service';

@Component({
  selector: 'app-infoschool-modal',
  imports: [],
  templateUrl: './infoschool-modal.component.html',
  styleUrl: './infoschool-modal.component.scss'
})
export class InfoschoolModalComponent {
  @Input() schoolId: number | null = null;
  schoolData: any = null;

  constructor(private apiService: ApiService, private toastService: ToastService, private schoolSelectionService: SchoolSelectionService) {}

  ngOnChanges() {
    if (this.schoolId) {
      this.getSchool(this.schoolId);
    }
  }

  setSelectedSchoolId(id: number | null) {
    this.schoolSelectionService.setSelectedSchoolId(id);
  }
  
  getSchool(id: number) {
    this.apiService.getSchool(id).subscribe(data => {
      this.schoolData = data;
    });
  }

  
}
