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
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var router_deprecated_2 = require('@angular/router-deprecated');
var dashboard_component_1 = require("./dashboard.component");
var entries_component_1 = require("./entries.component");
var entry_component_1 = require("./entry.component");
var navbarscroll_directives_1 = require("../directives/navbarscroll.directives");
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.goToEntries = function () {
        var _this = this;
        var mainBody = document.getElementById("mainBody");
        var routeName = this.router.currentInstruction.component.routeName;
        var link = ['Entries'];
        if (mainBody != null && routeName != 'Entries' && routeName == 'Entry') {
            mainBody.classList.add('animated', 'fadeOutRight');
            setTimeout(function () {
                _this.router.navigate(link).then(function (_) {
                    return mainBody.classList.add('animated', 'fadeInLeft');
                });
            }, 300);
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
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map