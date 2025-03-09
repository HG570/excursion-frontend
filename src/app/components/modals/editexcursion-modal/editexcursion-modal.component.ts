import { ChangeDetectorRef, Component, Input } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { ToastService } from '../../../services/toast.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-editexcursion-modal',
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './editexcursion-modal.component.html',
  styleUrl: './editexcursion-modal.component.scss'
})
export class EditexcursionModalComponent {
@Input() excursionId: number | null = null;
excursionData: any = null;
editExcursionForm: FormGroup = new FormGroup({});
schools: any[] = [];

  constructor(private fb: FormBuilder, private router: Router, private apiService: ApiService, private toastService: ToastService, private cdr: ChangeDetectorRef) {
    this.editExcursionForm = this.fb.group({
      fk_school_id: ['', Validators.required],
      link: ['', Validators.required],
      date: ['', Validators.required],
      name: ['', Validators.required],
      banner_url: ['', Validators.required],
      is_activity: ['', Validators.required]
    });
  }

  ngOnChanges()  {
    if (this.excursionId) {
      this.getExcursion(this.excursionId);
      this.apiService.getSchools().subscribe(data => {
        this.schools = data;
        this.cdr.detectChanges;
      });
    }
    
  }
  
  getExcursion(id: number) {
    this.apiService.getExcursion(id).subscribe(data => {
      this.excursionData = data
      this.editExcursionForm.patchValue({
        name: this.excursionData?.name,
        fk_school_id: this.excursionData?.school.id_school,
        link: this.excursionData?.link,
        date: this.excursionData?.date,
        banner_url: this.excursionData?.banner_url,
        is_activity: !!this.excursionData?.is_activity,
      });
    });
  }
  onSubmit() {
    if (this.editExcursionForm.valid) {
      const excursionData = this.editExcursionForm.value;
      excursionData.is_activity = !!excursionData.is_activity;
      excursionData.fk_school_id = Number(excursionData.fk_school_id);
      if (this.excursionId) {
        this.apiService.updateExcursion(this.excursionId, excursionData).subscribe({
          next: (response) => {
            this.toastService.show('Excursão adicionada com sucesso','success');
            this.router.navigate(['/lista-excursoes']);
            console.log('Excursao adicionada com sucesso', response);
            this.editExcursionForm.reset();
          },
          error: (err) => this.toastService.show('Erro ao adicionar excursao!','error')
        })
      }
    }
  }
  clearAll() {
    this.editExcursionForm.patchValue({
      fk_school_id: '',
      link: '',
      date: '',
      name: '',
      banner_url: '',
      is_activity: [true]
    });
  }
}
