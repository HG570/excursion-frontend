import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ViaCepService } from '../../../services/via-cep.service';
import { ToastService } from '../../../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editschool-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './editschool-modal.component.html',
  styleUrl: './editschool-modal.component.scss'
})
export class EditschoolModalComponent {
  @Input() schoolId: number | null = null;
  @Output() reloadSchools = new EventEmitter<void>();
  @Input() schoolData: any = null;
  editSchoolForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private router: Router, private apiService: ApiService, private viaCepService: ViaCepService, private toastService: ToastService, private cdr: ChangeDetectorRef) {
    this.editSchoolForm = this.fb.group({
      name: ['', Validators.required],
      cnpj: ['', Validators.required],
      postal_code: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
      neighborhood: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['Brasil', Validators.required],
      type: ['', Validators.required],
    });
  }
  ngOnChanges() {
    if (this.schoolId) {
      this.getSchool(this.schoolId);
    }
  }
  getSchool(id: number) {
    this.schoolData;
    this.cdr.detectChanges();
    this.editSchoolForm.patchValue({
      name: this.schoolData?.school?.name,
      cnpj: this.schoolData?.school?.cnpj,
      postal_code: this.schoolData?.school?.address?.postal_code,
      address: this.schoolData?.school?.address?.address,
      number: this.schoolData?.school?.address?.number,
      neighborhood: this.schoolData?.school?.address?.neighborhood,
      city: this.schoolData?.school?.address?.city,
      state: this.schoolData?.school?.address?.state,
      type: this.schoolData?.school?.type,
    });
    ;
  }
  searchCEP() {
    const cep = this.sanitizeValue(this.editSchoolForm.get('postal_code')?.value);

    if (!/^\d{8}$/.test(cep)) {
      alert('Por favor, insira um CEP válido com 8 números.');
      return;
    }

    this.viaCepService.searchAddress(cep).subscribe(
      (dados) => {
        if (dados.erro) {
          alert('CEP não encontrado.');
        } else {
          this.editSchoolForm.patchValue({
            address: dados.logradouro,
            neighborhood: dados.bairro,
            city: dados.localidade,
            state: dados.uf,
          });
        }
      },
      (error) => {
        alert('Erro ao buscar o CEP.');
        console.error(error);
      }
    );
  }

  private sanitizeValue(value: string): string {
    return value.replace(/[^\d]/g, '');
  }
  onSubmit() {
    if (this.editSchoolForm.valid) {
      const schoolData = {
        ...this.editSchoolForm.value,
        cnpj: this.sanitizeValue(this.editSchoolForm.value.cnpj),
        postal_code: this.sanitizeValue(this.editSchoolForm.value.postal_code)
      };
      if (this.schoolId) {
        this.apiService.updateSchool(this.schoolId, schoolData).subscribe({
          next: (response) => {
            this.toastService.show('Escola atualizada com sucesso', 'success');
            this.reloadSchools.emit();
            this.editSchoolForm.reset();
          },
          error: (err) => this.toastService.show('Erro ao editar escola!', 'error')
        })
      }
    }
  }
}
