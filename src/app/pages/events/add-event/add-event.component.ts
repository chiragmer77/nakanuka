import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
interface Guest {
    name: string;
    email: string;
    status: 'added' | 'invalid';
}

interface InviteDesign {
    id: string;
    name: string;
    gradient: string;
    selected: boolean;
}
@Component({
    selector: 'app-add-event',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, FormsModule],
    templateUrl: './add-event.component.html',
    styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent {
    currentStep = 1;
    guestInputMethod = 'manual';
    newGuestName = '';
    newGuestEmail = '';

    eventData = {
        name: '',
        type: '',
        date: '',
        venue: '',
        baseAmount: null as number | null,
        allowAdditional: true,
        noPets: true,
        over18Only: true
    };

    guestList: Guest[] = [
        { name: 'John Doe', email: 'john@email.com', status: 'added' },
        { name: 'Jane Smith', email: 'jane@email.com', status: 'added' },
        { name: 'Bob Wilson', email: 'bob@email.com', status: 'added' }
    ];

    inviteDesigns: InviteDesign[] = [
        {
            id: 'elegant',
            name: 'Elegant Purple',
            gradient: 'linear-gradient(45deg, #667eea, #764ba2)',
            selected: true
        },
        {
            id: 'vibrant',
            name: 'Vibrant Pink',
            gradient: 'linear-gradient(45deg, #f093fb, #f5576c)',
            selected: false
        },
        {
            id: 'ocean',
            name: 'Ocean Blue',
            gradient: 'linear-gradient(45deg, #4facfe, #00f2fe)',
            selected: false
        },
        {
            id: 'nature',
            name: 'Nature Green',
            gradient: 'linear-gradient(45deg, #43e97b, #38f9d7)',
            selected: false
        }
    ];

    get selectedDesign() {
        return this.inviteDesigns.find(d => d.selected);
    }

    nextStep() {
        if (this.canProceedToNext() && this.currentStep < 4) {
            this.currentStep++;
        }
    }

    previousStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
        }
    }

    canProceedToNext(): boolean {
        switch (this.currentStep) {
            case 1:
                return !!(this.eventData.name && this.eventData.type && this.eventData.date && this.eventData.venue && this.eventData.baseAmount);
            case 2:
                return !!this.selectedDesign;
            case 3:
                return this.guestList.length > 0;
            case 4:
                return true;
            default:
                return false;
        }
    }

    selectDesign(designId: string) {
        this.inviteDesigns.forEach(design => {
            design.selected = design.id === designId;
        });
    }

    setGuestInputMethod(method: string) {
        this.guestInputMethod = method;
    }

    addGuest() {
        if (this.newGuestName && this.newGuestEmail) {
            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const status = emailRegex.test(this.newGuestEmail) ? 'added' : 'invalid';

            this.guestList.push({
                name: this.newGuestName,
                email: this.newGuestEmail,
                status
            });

            this.newGuestName = '';
            this.newGuestEmail = '';
        }
    }

    removeGuest(guest: Guest) {
        const index = this.guestList.indexOf(guest);
        if (index > -1) {
            this.guestList.splice(index, 1);
        }
    }

    sendInvites() {
        // Handle sending invites
        console.log('Sending invites to:', this.guestList);
        alert(`Event created successfully! Invites sent to ${this.guestList.length} guests.`);
    }
}