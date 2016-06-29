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
var entries_service_1 = require('../services/entries.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var EntriesComponent = (function () {
    function EntriesComponent(entriesService, router) {
        this.entriesService = entriesService;
        this.router = router;
    }
    EntriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var v = document.getElementById("bannerVideo");
        v.volume = 0.0;
        this.entriesService.getEntries()
            .then(function (entries) { return _this.entries = entries; });
        // .then(hi => console.log(this.entries))
    };
    EntriesComponent.prototype.goToDetail = function (entry) {
        var _this = this;
        var mainBody = document.getElementById("mainBody");
        this.selectedEntry = entry;
        var link = ['Entry', { id: entry.id }];
        if (mainBody != null) {
            mainBody.classList.add('animated', 'fadeOutLeft');
            setTimeout(function () {
                _this.router.navigate(link);
            }, 300);
        }
    };
    EntriesComponent = __decorate([
        core_1.Component({
            selector: 'entries',
            templateUrl: 'app/html/entries.component.html',
            providers: [
                entries_service_1.EntriesService
            ]
        }), 
        __metadata('design:paramtypes', [entries_service_1.EntriesService, router_deprecated_1.Router])
    ], EntriesComponent);
    return EntriesComponent;
}());
exports.EntriesComponent = EntriesComponent;
//# sourceMappingURL=entries.component.js.map