import { Component, AfterContentInit , AfterViewChecked} from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {DashboardComponent} from "./dashboard.component";
import {EntriesComponent} from "./entries.component";
import {EntryComponent} from "./entry.component";
import {NavBarScrollDirective} from "../directives/navbarscroll.directives";


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
    templateUrl: 'app/html/app.component.html' ,
    directives: [ROUTER_DIRECTIVES, NavBarScrollDirective],
    providers: [
        ROUTER_PROVIDERS
    ]
})
export class AppComponent {
    constructor(private router: Router) {}

    goToEntries() {
        let mainBody = document.getElementById("mainBody")
        let routeName = this.router.currentInstruction.component.routeName
        let link = ['Entries'];
        if(mainBody != null && routeName != 'Entries' && routeName == 'Entry') {
            mainBody.classList.add('animated', 'fadeOutRight')
            setTimeout(() => {
                this.router.navigate(link).then(_=>
                mainBody.classList.add('animated', 'fadeInLeft'))
            }, 300)
        }
    }
}