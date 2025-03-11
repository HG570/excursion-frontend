import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

export class ListschoolComponent implements OnInit {
  schools: any[] = [];
  selectedSchoolId: number | null = null;

  constructor(private toastService: ToastService, private apiService: ApiService, private cdr: ChangeDetectorRef) { this.schools = []; }

  setSelectedSchoolId(id: number) {
    this.selectedSchoolId = id;
  }

  loadSchools() {
    this.apiService.getAllSchool().subscribe(data => {
      this.schools = data;
      this.cdr.detectChanges();
    });
  }

  ngOnInit() {
    this.loadSchools();
  }
  
  deleteSchool(id: number | null) {
    console.log(id);
    this.loadSchools();
  }

  updateSchool(id: number | null) {
    console.log(id);
    this.loadSchools();
  }
}
