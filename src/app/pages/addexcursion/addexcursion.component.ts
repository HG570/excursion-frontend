import { ChangeDetectorRef, Component } from '@angular/core';
import { BackComponent } from "../../components/buttons/back/back.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../services/toast.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-addexcursion',
  imports: [ReactiveFormsModule, BackComponent, NgFor],
  templateUrl: './addexcursion.component.html',
  styleUrl: './addexcursion.component.scss'
})
export class AddexcursionComponent {
addExcursionForm: FormGroup = new FormGroup({});
schools: any[] = [];

  constructor(private fb: FormBuilder, private router: Router, private apiService: ApiService, private toastService: ToastService, private cdr: ChangeDetectorRef) {
    this.addExcursionForm = this.fb.group({
      fk_school_id: ['', Validators.required],
      link: ['', Validators.required],
      date: ['', Validators.required],
      name: ['', Validators.required],
      banner_url: ['', Validators.required],
      is_activity: [true]
    });
  }

  ngOnInit(): void {
    this.apiService.getSchools().subscribe(data => {
      this.schools = data;
      console.log(this.schools);
      this.cdr.detectChanges;
    });
    
  }

  onSubmit() {
    if (this.addExcursionForm.valid) {
      const excursionData = this.addExcursionForm.value;
      excursionData.fk_school_id = Number(excursionData.fk_school_id);
      this.apiService.addExcursion(excursionData).subscribe({
        next: (response) => {
          this.toastService.show('Excursão adicionada com sucesso','success');
          this.router.navigate(['/lista-excursoes']);
          console.log('Excursao adicionada com sucesso', response);
          this.addExcursionForm.reset();
        },
        error: (err) => this.toastService.show('Erro ao adicionar excursao!','error')
      })
    }
  }

  clearAll() {
    this.addExcursionForm.patchValue({
      fk_school_id: '',
      link: '',
      date: '',
      name: '',
      banner_url: '',
      is_activity: [true]
    });
  }
}
