import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
    selector: 'app-landing-dashboard',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './landing-dashboard.component.html',
    styleUrl: './landing-dashboard.component.scss'
})
export class LandingDashboardComponent {
    cards = [
        { title: 'Active Tests', value: 128, delta: '+8%' },
        { title: 'Failed', value: 12, delta: '-2%' },
        { title: 'Pass Rate', value: '90%', delta: '+1.4%' },
    ];


    listItems = [
        { title: 'Load tests', subtitle: 'Priority: High', status: 'running' },
        { title: 'Unit tests', subtitle: 'Priority: Medium', status: 'idle' },
        { title: 'E2E', subtitle: 'Priority: Low', status: 'queued' },
    ];


    toggled = false;


    toggle() { this.toggled = !this.toggled; }
}