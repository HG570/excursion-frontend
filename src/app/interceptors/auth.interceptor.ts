import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpInterceptorFn, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LogInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.getCookie('token');

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      });
    }

    return next.handle(req);
  }

  private getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? match[2] : null;
  }
}

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.log(req);

    return next.handle(req);
  }

  log(req: HttpRequest<any>) {
    console.log('Loggest Request ->', req.url, req.method, req.body)
  }
}
const getCookie = (name: string): string | null => {
  const platformId = inject(PLATFORM_ID);
  
  if (!isPlatformBrowser(platformId)) {
    return null; // Evita erro no SSR (Server-Side Rendering)
  }
  const cookies = document.cookie.split('; ');
  const cookie = cookies.find(row => row.startsWith(name + '='));
  return cookie ? cookie.split('=')[1] : null;
};

export const TokenInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  try {
    const token = getCookie('token');
  const clonedReq = req.clone({
    setHeaders: token ? { 'Authorization': `Bearer ${token}` } : {}
  });
  
  return next(clonedReq);;
  } catch (error) {
    console.error('Erro no TokenInterceptor:', error);
    return next(req);
  }
}