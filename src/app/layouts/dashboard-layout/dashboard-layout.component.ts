import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard-layout',
    standalone: true,
    imports: [RouterOutlet, CommonModule, RouterModule],
    templateUrl: './dashboard-layout.component.html',
    styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {
}
