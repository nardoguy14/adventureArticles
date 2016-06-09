"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const router_deprecated_1 = require('@angular/router-deprecated');
const router_deprecated_2 = require('@angular/router-deprecated');
const dashboard_component_1 = require("./dashboard.component");
const entries_component_1 = require("./entries.component");
const entry_component_1 = require("./entry.component");
const navbarscroll_directives_1 = require("../directives/navbarscroll.directives");
let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
    }
    goToEntries() {
        let mainBody = document.getElementById("mainBody");
        let routeName = this.router.currentInstruction.component.routeName;
        let link = ['Entries'];
        if (mainBody != null && routeName != 'Entries' && routeName == 'Entry') {
            mainBody.classList.add('animated', 'fadeOutRight');
            setTimeout(() => {
                this.router.navigate(link).then(_ => mainBody.classList.add('animated', 'fadeInLeft'));
            }, 300);
        }
    }
};
AppComponent = __decorate([
    router_deprecated_2.RouteConfig([
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: dashboard_component_1.DashboardComponent
        },
        {
            path: '/entries',
            name: 'Entries',
            component: entries_component_1.EntriesComponent,
            useAsDefault: true
        },
        {
            path: '/entries/:id',
            name: 'Entry',
            component: entry_component_1.EntryComponent
        }
    ]),
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/html/app.component.html',
        directives: [router_deprecated_2.ROUTER_DIRECTIVES, navbarscroll_directives_1.NavBarScrollDirective],
        providers: [
            router_deprecated_2.ROUTER_PROVIDERS
        ]
    }), 
    __metadata('design:paramtypes', [router_deprecated_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map