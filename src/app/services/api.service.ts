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
    return this.http.get(`${this.baseUrl}${API_ENDPOINTS.EXCURSION}/all-excursion`, { withCredentials: true });
  }

  getExcursion(excursionId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${API_ENDPOINTS.EXCURSION}/show-excursion/${excursionId}`, { withCredentials: true });
  }

  addExcursion(excursionData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${API_ENDPOINTS.EXCURSION}/add`, excursionData, { withCredentials: true });
  }

  deleteExcursion(excursionId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${API_ENDPOINTS.EXCURSION}/delete/${excursionId}`, { withCredentials: true });
  }

  updateExcursion(excursionId: number, excursionData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${API_ENDPOINTS.EXCURSION}/edit/${excursionId}`, excursionData, { withCredentials: true });
  }

  getAllSchool(): Observable<any>{
    return this.http.get(`${this.baseUrl}${API_ENDPOINTS.SCHOOL}/all-school`, { withCredentials: true })
  }

  getSchools(): Observable<any>{
    return this.http.get(`${this.baseUrl}${API_ENDPOINTS.SCHOOL}/schools`, { withCredentials: true })
  }

  getSchool(schoolId: number): Observable<any>{
    return this.http.get(`${this.baseUrl}${API_ENDPOINTS.SCHOOL}/show-school/${schoolId}`, { withCredentials: true })
  }

  addSchool(schoolData: any): Observable<any>{
    return this.http.post(`${this.baseUrl}${API_ENDPOINTS.SCHOOL}/add`, schoolData, { withCredentials: true })
  }

  updateSchool(schoolId: number, schoolData: any): Observable<any>{
    return this.http.put(`${this.baseUrl}${API_ENDPOINTS.SCHOOL}/edit/${schoolId}`, schoolData, { withCredentials: true })
  }
  
  deleteSchool(schoolId: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}${API_ENDPOINTS.SCHOOL}/delete/${schoolId}`, { withCredentials: true })
  }

}