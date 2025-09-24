import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
export interface Guest {
    name: string;
    email: string;
    phone: string;
    amount: number;
    method: string;
    status: 'Received' | 'Delivered';
}
@Component({
    selector: 'app-past-event',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, FormsModule],
    templateUrl: './past-event.component.html',
    styleUrls: ['./past-event.component.scss']
})
export class PastEventComponent {
    guests: Guest[] = [
        {
            name: 'John Doe',
            email: 'john@email.com',
            phone: '+353-87-123-4567',
            amount: 75,
            method: 'Online',
            status: 'Received'
        },
        {
            name: 'Jane Smith',
            email: 'jane@email.com',
            phone: '+353-87-234-5678',
            amount: 90,
            method: 'Cash',
            status: 'Delivered'
        },
        {
            name: 'Alice Brown',
            email: 'alice@email.com',
            phone: '+353-87-345-6789',
            amount: 100,
            method: 'Voucher',
            status: 'Delivered'
        }
    ];
}