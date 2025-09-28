import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private http = inject(HttpClient);
    private baseUrl = environment.apiBaseUrl;

    // Register API using Promise
    async register(data: { fullName: string; email: string; phone: string; password: string }): Promise<any> {
        return firstValueFrom(this.http.post(`${this.baseUrl}/auth/signup`, data));
    }

    // Login API using Promise
    async login(data: { email: string; password: string }): Promise<any> {
        return firstValueFrom(this.http.post(`${this.baseUrl}/auth/login`, data));
    }

    logout(): void {
        localStorage.removeItem('token');
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }
}
