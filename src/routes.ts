import { Routes } from "@angular/router";
import { Error404Component } from "./app/errors/404.component";
import { CreateEventComponent } from "./app/events/create-event.component";
import { EventRouteActivator } from "./app/events/event-details/event-route-activator.service";
import { EventDetailsComponent } from "./app/events/event-details/events-details.component";
import { EventListResolver } from "./app/events/events-list-resolver.service";
import { EventsListComponent } from "./app/events/events-list.component";

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: {events:EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
]