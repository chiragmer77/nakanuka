import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [RouterLink, FormsModule, CommonModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
})
export class RegisterComponent {
    fullName = '';
    email = '';
    mobileNumber = '';
    password = '';
    agreeToTerms = false;

    onSubmit() {
        // Registration logic will be implemented later
        console.log('Registration attempt:', {
            fullName: this.fullName,
            email: this.email,
            mobileNumber: this.mobileNumber,
            password: this.password,
            agreeToTerms: this.agreeToTerms
        });
    }
}
