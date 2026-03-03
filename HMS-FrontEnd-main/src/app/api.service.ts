// src/app/api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) { }
url:string= environment.apiBaseUrl;
    getPatients(): Observable<any> {
        return this.http.get<any>
       (`${this.url}/api/patient/get`);
    }

    addPatient(data: any): Observable<any> {
        return this.http.post<any> 
        (`${this.url}/api/patient/add`, data);
    }

    updatePatient(id: string, data: any): Observable<any> {
        return this.http.put<any>(
            `${this.url}/api/patient/update/${id}`,
            data
        );
    }

    deletePatient(id: string): Observable<any> {
        return this.http.delete<any>(
            `${this.url}/api/patient/delete/${id}`
        );
    }

    getDoctors(): Observable<any> {
        return this.http.get<any>(`${this.url}/api/doctor/get`);
    }

    addDoctor(data: any): Observable<any> {
        return this.http.post<any>(`${this.url}/api/doctor/add`, data);
    }

    updateDoctor(id: string, data: any): Observable<any> {
        return this.http.put<any>(
            `${this.url}/api/doctor/update/${id}`,
            data
        );
    }

    deleteDoctor(id: string): Observable<any> {
        return this.http.delete<any>(
             `${this.url}/api/doctor/delete/${id}`
        );
    }

    getAppointments(): Observable<any> {
        return this.http.get<any>
        (`${this.url}/api/appointment/get`);
    }

    addAppointment(data: any): Observable<any> {
        return this.http.post<any>(
            `${this.url}/api/appointment/add`,
            data
        );
    }

    updateAppointment(id: string, data: any): Observable<any> {
        return this.http.put<any>(
            `${this.url}/api/appointment/update/${id}`,
            data
        );
    }

    deleteAppointment(id: string): Observable<any> {
        return this.http.delete<any>(
            `${this.url}/api/appointment/delete/${id}`
        );
    }
}
