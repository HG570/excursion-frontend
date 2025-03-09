import { Component } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddschoolComponent } from './pages/addschool/addschool.component';
import { HeaderComponent } from './components/header/header.component';
import { MessageToastComponent } from "./components/toasts/message-toast/message-toast.component";
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    MessageToastComponent,
    HttpClientModule
],
providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'control-panel-rpassaingressos';
}
