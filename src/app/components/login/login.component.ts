import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-login',
  imports: [ ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({});
   constructor(private fb: FormBuilder, private apiService: ApiService, private toastService: ToastService) {
      this.loginForm = this.fb.group({
        user: ['', Validators.required],
        password: ['', Validators.required],
      });
    }

  onSubmit() {
    if (this.loginForm.valid) {
      const managerData = this.loginForm.value;

      this.apiService.loginManager(managerData).subscribe({
        next: (response) => {
          this.toastService.show('Login realizado!','success');
          console.log('Login realizado com sucesso', response);
          this.apiService.storeToken(response.token);
          this.loginForm.reset();
          window.location.reload();
        },
        error: (err) => this.toastService.show('Erro ao logar!','error')
      })
    }
  }
}
