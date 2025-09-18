import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-forget-password',
    standalone: true,
    imports: [FormsModule, RouterLink, CommonModule],
    templateUrl: './forget-password.component.html',
    styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
    email = '';
    password = '';

    onSubmit() {
        // Login logic will be implemented later
        console.log('Login attempt:', { email: this.email, password: this.password });
    }
}
