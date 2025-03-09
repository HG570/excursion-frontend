import { Component, OnInit } from '@angular/core';
import { BackComponent } from '../../components/buttons/back/back.component';
import { InfoschoolModalComponent } from '../../components/modals/infoschool-modal/infoschool-modal.component'
import { EditschoolModalComponent } from '../../components/modals/editschool-modal/editschool-modal.component';
import { ConfirmModalComponent } from "../../components/modals/confirm-modal/confirm-modal.component";
import { ToastService } from '../../services/toast.service';
import { ApiService } from '../../services/api.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-listschool',
  imports: [BackComponent, EditschoolModalComponent, InfoschoolModalComponent, ConfirmModalComponent, NgFor],
  templateUrl: './listschool.component.html',
  styleUrl: './listschool.component.scss'
})

export class ListschoolComponent {
  schools: any[] = [];
  selectedSchoolId: number | null = null;

  constructor(private toastService: ToastService, private apiService: ApiService) { this.schools = []; }

  setSelectedSchoolId(id: number) {
    this.selectedSchoolId = id;
  }

  ngAfterViewInit() {
      this.apiService.getAllSchool().subscribe(data => {
        this.schools = data;
      });
  }
  
  deleteSchool(id: number | null) {
    console.log(this.schools);
    if (!this.schools) {
      this.schools = [];
      return; 
    }
    this.schools = this.schools.filter(data => data.schoolId !== id);
  }
  ngOnDestroy(): void {
    this.schools = [];
    this.selectedSchoolId = null;
  }
}
