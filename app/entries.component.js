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
const entries_service_1 = require('./entries.service');
const router_deprecated_1 = require('@angular/router-deprecated');
let EntriesComponent = class EntriesComponent {
    constructor(entriesService, router) {
        this.entriesService = entriesService;
        this.router = router;
    }
    ngOnInit() {
        this.entriesService.getEntries()
            .then(entries => this.entries = entries);
        // .then(hi => console.log(this.entries))
    }
    goToDetail(entry) {
        this.selectedEntry = entry;
        let link = ['Entry', { id: entry.id }];
        this.router.navigate(link);
    }
};
EntriesComponent = __decorate([
    core_1.Component({
        selector: 'entries',
        templateUrl: 'app/entries.component.html',
        providers: [
            entries_service_1.EntriesService
        ]
    }), 
    __metadata('design:paramtypes', [entries_service_1.EntriesService, router_deprecated_1.Router])
], EntriesComponent);
exports.EntriesComponent = EntriesComponent;
//# sourceMappingURL=entries.component.js.map