import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Invite {
    id: number;
    title: string;
    host: string;
    date: string;
    status: 'pending' | 'accepted' | 'declined';
}

export interface Event {
    id: number;
    title: string;
    date: string;
    amount: number;
    paymentType: 'cash' | 'online' | 'voucher';
    status: 'pledged' | 'paid';
}

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
    // Using signals for reactive state management (Angular 17+)
    invites = signal<Invite[]>([
        {
            id: 1,
            title: "Sarah's Birthday Party",
            host: "Sarah Johnson",
            date: "Dec 15, 2024",
            status: 'pending'
        },
        {
            id: 2,
            title: "Mike & Lisa's Wedding",
            host: "Mike Thompson",
            date: "Jan 20, 2025",
            status: 'pending'
        },
        {
            id: 3,
            title: "Housewarming Party",
            host: "Alex Brown",
            date: "Dec 28, 2024",
            status: 'pending'
        }
    ]);

    upcomingEvents = signal<Event[]>([
        {
            id: 1,
            title: "Emma's Graduation Party",
            date: "Tomorrow, Dec 12",
            amount: 75.00,
            paymentType: 'cash',
            status: 'pledged'
        },
        {
            id: 2,
            title: "Company Holiday Party",
            date: "Dec 18, 2024",
            amount: 50.00,
            paymentType: 'online',
            status: 'paid'
        },
        {
            id: 3,
            title: "New Year's Eve Party",
            date: "Dec 31, 2024",
            amount: 100.00,
            paymentType: 'voucher',
            status: 'pledged'
        }
    ]);

    pledgedGiftsCount = signal<number>(2);

    downloadStatement(): void {
        // Implementation for downloading statement
        console.log('Downloading statement...');
    }

    payNow(eventId: number): void {
        // Implementation for pay now functionality
        console.log('Pay now for event:', eventId);
    }

    respondToInvite(inviteId: number, response: 'accepted' | 'declined'): void {
        // Implementation for responding to invite
        console.log('Responding to invite:', inviteId, response);

        // Update the invite status using signals
        const currentInvites = this.invites();
        const updatedInvites = currentInvites.map(invite =>
            invite.id === inviteId ? { ...invite, status: response } : invite
        );
        this.invites.set(updatedInvites);
    }
}
