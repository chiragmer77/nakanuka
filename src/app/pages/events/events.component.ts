import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-events',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './events.component.html',
    styleUrl: './events.component.scss'
})
export class EventsComponent {


    cards = Array.from({ length: 6 }).map((_, i) => ({
        title: `Event ${i + 1}`,
        date: 'Sep 12, 2025',
        label: i % 2 === 0 ? 'Live' : 'Planned',
        description: 'A short description for this event. Put more details here as needed.'
    }));






}
