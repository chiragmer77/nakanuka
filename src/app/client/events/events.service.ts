import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { firstValueFrom } from 'rxjs';

export interface Event {
    id?: string;
    title: string;
    description: string;
    date: string;
    location?: string;
}

@Injectable({
    providedIn: 'root',
})
export class EventService {
    private http = inject(HttpClient);
    private baseUrl = environment.apiBaseUrl;

    // Add a new event
    async addEvent(event: Event): Promise<Event> {
        return firstValueFrom(this.http.post<Event>(`${this.baseUrl}/events`, event));
    }

    // Get all events
    async getEvents(): Promise<Event[]> {
        return firstValueFrom(this.http.get<Event[]>(`${this.baseUrl}/events`));
    }

    // Get event by ID
    async getEventById(id: string): Promise<Event> {
        return firstValueFrom(this.http.get<Event>(`${this.baseUrl}/events/${id}`));
    }

    // Update an existing event
    async updateEvent(id: string, event: Event): Promise<Event> {
        return firstValueFrom(this.http.put<Event>(`${this.baseUrl}/events/${id}`, event));
    }

    // Delete an event
    async deleteEvent(id: string): Promise<{ message: string }> {
        return firstValueFrom(this.http.delete<{ message: string }>(`${this.baseUrl}/events/${id}`));
    }
}
