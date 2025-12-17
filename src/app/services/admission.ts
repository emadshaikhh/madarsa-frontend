import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {

  private apiUrl = 'https://madarsa-backend-zlcf.onrender.com/';

  constructor(private http: HttpClient) { }

  // 1. Send Data (Submit Form)
  submitAdmissionForm(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // 2. Fetch Data (Get List for Admin) <--- ADD THIS NEW PART
  getStudents(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}