import { Component } from '@angular/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {DashboardComponent} from "./dashboard.component";
import {EntriesComponent} from "./entries.component";
import {EntryComponent} from "./entry.component";


@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent
    },
    {
        path: '/entries',
        name: 'Entries',
        component: EntriesComponent,
        useAsDefault: true
    },
    {
        path: '/entries/:id',
        name: 'Entry',
        component: EntryComponent
    }
])

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html' ,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]
})
export class AppComponent { }