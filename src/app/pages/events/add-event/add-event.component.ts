import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
interface Guest {
    name: string;
    email: string;
    status: 'added' | 'invalid';
    mobile: number;
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

    newGuestMobile = '';
    guestList: { name: string; email: string; mobile: string; status: string }[] = [];
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



    removeGuest(guest: any) {
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

    guestErrors = { name: '', email: '', mobile: '' };

    addGuest() {
        this.guestErrors = { name: '', email: '', mobile: '' }; // reset errors
        let hasError = false;

        if (!this.newGuestName.trim()) {
            this.guestErrors.name = 'Name is required';
            hasError = true;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!this.newGuestEmail.trim()) {
            this.guestErrors.email = 'Email is required';
            hasError = true;
        } else if (!emailPattern.test(this.newGuestEmail)) {
            this.guestErrors.email = 'Enter a valid email';
            hasError = true;
        }

        const mobilePattern = /^[0-9]{10}$/;
        if (!this.newGuestMobile.trim()) {
            this.guestErrors.mobile = 'Mobile number is required';
            hasError = true;
        } else if (!mobilePattern.test(this.newGuestMobile)) {
            this.guestErrors.mobile = 'Enter a valid 10-digit number';
            hasError = true;
        }

        if (hasError) return;

        this.guestList.push({
            name: this.newGuestName,
            email: this.newGuestEmail,
            mobile: this.newGuestMobile,
            status: 'added',
        });

        // Reset fields
        this.newGuestName = '';
        this.newGuestEmail = '';
        this.newGuestMobile = '';
    }


    clearError(field: 'name' | 'email' | 'mobile') {
        this.guestErrors[field] = '';
    }
}