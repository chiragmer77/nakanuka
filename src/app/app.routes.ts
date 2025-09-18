import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        loadComponent: () =>
            import('./layouts/auth-layout/auth-layout.component').then((m) => m.AuthLayoutComponent),
        children: [
            {
                path: 'login',
                loadComponent: () =>
                    import('./pages/auth/login/login.component').then((m) => m.LoginComponent),
            },
            {
                path: 'register',
                loadComponent: () =>
                    import('./pages/auth/register/register.component').then((m) => m.RegisterComponent),
            },
            {
                path: 'forgot-password',
                loadComponent: () =>
                    import('./pages/auth/forget-password/forget-password.component').then(
                        (m) => m.ForgetPasswordComponent
                    ),
            },
            {
                path: 'reset-password',
                loadComponent: () =>
                    import('./pages/auth/reset-password/reset-password.component').then(
                        (m) => m.ResetPasswordComponent
                    ),
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: 'dashboard',
        loadComponent: () =>
            import('./layouts/dashboard-layout/dashboard-layout.component').then(
                (m) => m.DashboardLayoutComponent
            ),
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
            },
        ],
    },
    {
        path: 'events',
        loadComponent: () =>
            import('./layouts/dashboard-layout/dashboard-layout.component').then(
                (m) => m.DashboardLayoutComponent
            ),
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./pages/events/events.component').then((m) => m.EventsComponent),
            },
            {
                path: 'add-event',
                loadComponent: () =>
                    import('./pages/events/add-event/add-event.component').then(
                        (m) => m.AddEventComponent
                    ),
            },
        ],
    },
    {
        path: '**',
        redirectTo: '/auth/login',
    },
];
