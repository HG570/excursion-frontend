import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { API_ENDPOINTS } from '../config/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = API_ENDPOINTS.BASE_URL;

  constructor(private http: HttpClient) {}
  getAllExcursion(): Observable<any> {
    return this.http.get(`${this.baseUrl}${API_ENDPOINTS.EXCURSION}/all-excursion`);
  }

  getExcursion(excursionId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${API_ENDPOINTS.EXCURSION}/show-excursion/${excursionId}`);
  }

  addExcursion(excursionData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${API_ENDPOINTS.EXCURSION}/add`, excursionData);
  }

  deleteExcursion(excursionId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${API_ENDPOINTS.EXCURSION}/delete/${excursionId}`);
  }

  updateExcursion(excursionId: number, excursionData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${API_ENDPOINTS.EXCURSION}/edit/${excursionId}`, excursionData);
  }

  loginManager(managerData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${API_ENDPOINTS.MANAGER}/login`, managerData);
  }
  storeToken(token: string) {
    document.cookie = `token=${token}; path=/; Secure`;
  }

  authManager(): Observable<boolean> {
    return this.http.get<{ valid?: string, error?: string }>(`${this.baseUrl}${API_ENDPOINTS.MANAGER}/auth`).pipe(
      map(response => response.valid === 'True'),
      catchError(() => [false])
    );
  }

  getAllSchool(): Observable<any>{
    return this.http.get(`${this.baseUrl}${API_ENDPOINTS.SCHOOL}/all-school`)
  }

  getSchools(): Observable<any>{
    return this.http.get(`${this.baseUrl}${API_ENDPOINTS.SCHOOL}/schools`)
  }

  getSchool(schoolId: number): Observable<any>{
    return this.http.get(`${this.baseUrl}${API_ENDPOINTS.SCHOOL}/show-school/${schoolId}`)
  }

  addSchool(schoolData: any): Observable<any>{
    return this.http.post(`${this.baseUrl}${API_ENDPOINTS.SCHOOL}/add`, schoolData)
  }

  updateSchool(schoolId: number, schoolData: any): Observable<any>{
    return this.http.put(`${this.baseUrl}${API_ENDPOINTS.SCHOOL}/edit/${schoolId}`, schoolData)
  }
  
  deleteSchool(schoolId: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}${API_ENDPOINTS.SCHOOL}/delete/${schoolId}`)
  }

}