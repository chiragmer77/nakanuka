import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../client/auth/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, RouterLink, CommonModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    email = '';
    password = '';
    rememberMe = false;

    constructor(private authService: AuthService, private router: Router) { }

    async onSubmit(form?: NgForm) {
        if (form?.valid) {
            try {
                const response = await this.authService.login({
                    email: this.email,
                    password: this.password,
                });

                console.log('Login success', response);

                // Save token
                localStorage.setItem('token', response.token);

                // Optionally handle "Remember Me"
                if (this.rememberMe) {
                    localStorage.setItem('rememberMe', 'true');
                } else {
                    localStorage.removeItem('rememberMe');
                }

                // Navigate to dashboard
                this.router.navigate(['/dashboard']);

                // Reset form
                form.resetForm();
            } catch (err) {
                console.error('Login failed', err);
                alert('Invalid credentials. Please try again.');
            }
        } else {
            console.warn('Form is invalid');
        }
    }

    // Placeholder for Google login
    onGoogleLogin() {
        console.log('Google login clicked');
    // TODO: Implement Google login flow
    }

}
