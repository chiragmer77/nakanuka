import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, RouterLink],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    email = '';
    password = '';

    onSubmit() {
        // Login logic will be implemented later
        console.log('Login attempt:', { email: this.email, password: this.password });
    }
}
