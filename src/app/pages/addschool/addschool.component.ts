import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ViaCepService } from '../../services/via-cep.service';
import { BackComponent } from '../../components/buttons/back/back.component';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addschool',
  standalone: true,
  imports: [ReactiveFormsModule, BackComponent],
  templateUrl: './addschool.component.html',
  styleUrl: './addschool.component.scss'
})
export class AddschoolComponent {
  addSchoolForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private router: Router, private apiService: ApiService, private viaCepService: ViaCepService, private toastService: ToastService) {
    this.addSchoolForm = this.fb.group({
      name: ['', Validators.required],
      cnpj: ['', Validators.required],
      postal_code: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
      neighborhood: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      type: ['0', Validators.required],
    });
  }

  searchCEP() {
    const cep = this.sanitizeValue(this.addSchoolForm.get('postal_code')?.value);

    if (!/^\d{8}$/.test(cep)) {
      alert('Por favor, insira um CEP válido com 8 números.');
      return;
    }

    this.viaCepService.searchAddress(cep).subscribe(
      (dados) => {
        if (dados.erro) {
          alert('CEP não encontrado.');
          this.clearAddress();
        } else {
          this.addSchoolForm.patchValue({
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
        this.clearAddress();
      }
    );
  }

  private sanitizeValue(value: string): string {
    return value.replace(/[^\d]/g, '');
  }

  onSubmit() {
    if (this.addSchoolForm.valid) {
      const schoolData = {
        ...this.addSchoolForm.value,
        cnpj: this.sanitizeValue(this.addSchoolForm.value.cnpj),
        postal_code: this.sanitizeValue(this.addSchoolForm.value.postal_code)
      };

      this.apiService.addSchool(schoolData).subscribe({
        next: (response) => {
          this.toastService.show('Escolas adicionada com sucesso','success');
          this.router.navigate(['/lista-escolas']);
          console.log('Escola adicionada com sucesso', response);
          this.addSchoolForm.reset();
        },
        error: (err) => this.toastService.show('Erro ao adicionar escola!','error')
      })
    }
  }

  clearAddress() {
    this.addSchoolForm.patchValue({
      address: '',
      neighborhood: '',
      city: '',
      state: '',
    });
  }

  clearAll() {
    this.addSchoolForm.patchValue({
      name: '',
      cnpj: '',
      postal_code: '',
      address: '',
      number: '',
      neighborhood: '',
      city: '',
      state: '',
      type: '',
    });
  }
}
