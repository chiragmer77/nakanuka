import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../client/auth/auth.service';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [RouterLink, FormsModule, CommonModule],
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    fullName = '';
    email = '';
    phone = '';
    password = '';
    agreeToTerms = false;

    constructor(private authService: AuthService) { }

    async onSubmit(form?: NgForm) {
        if (form?.valid) {
            const signupData = {
                fullName: this.fullName,
                email: this.email,
                phone: this.phone,
                password: this.password,
            };

            try {
                const response = await this.authService.register(signupData);
                console.log('Signup success', response);
                localStorage.setItem('token', response.token);

                // Reset the form after successful signup
                form.resetForm();
            } catch (err) {
                console.error('Signup failed', err);
            }
        } else {
            console.warn('Form is invalid');
        }
    }
}
