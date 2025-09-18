import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-reset-password',
    standalone: true,
    imports: [FormsModule, RouterLink, CommonModule],
    templateUrl: './reset-password.component.html',
    styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
    newPassword = '';
    confirmPassword = '';

    onSubmit() {
        // Login logic will be implemented later
        console.log('Login attempt:', { newPassword: this.newPassword, confirmPassword: this.confirmPassword });
    }
}
