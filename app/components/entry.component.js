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
var entry_1 = require("../entry");
var router_deprecated_1 = require('@angular/router-deprecated');
var image_directives_1 = require('../directives/image.directives');
var EntryComponent = (function () {
    function EntryComponent(entriesService, router, routeParams) {
        this.entriesService = entriesService;
        this.router = router;
        this.routeParams = routeParams;
    }
    EntryComponent.prototype.ngOnInit = function () {
        this.id = +this.routeParams.get('id');
        this.getEntry(this.id);
    };
    EntryComponent.prototype.getEntry = function (id) {
        var _this = this;
        this.entriesService.getEntry(this.id)
            .then(function (entry) { return _this.article = entry; });
    };
    EntryComponent.prototype.isPicture = function (obj) {
        if (obj instanceof entry_1.Picture)
            return true;
        else
            return false;
    };
    EntryComponent.prototype.isPictureSet = function (obj) {
        if (obj instanceof entry_1.PictureSquareSet) {
            return true;
        }
        else
            return false;
    };
    EntryComponent.prototype.isVideo = function (obj) {
        if (obj instanceof entry_1.EntryVideo) {
            return true;
        }
        else
            return false;
    };
    EntryComponent.prototype.isText = function (obj) {
        if (obj instanceof entry_1.EntryText) {
            return true;
        }
        else
            return false;
    };
    EntryComponent = __decorate([
        core_1.Component({
            selector: 'entry',
            templateUrl: 'app/html/entry.component.html',
            providers: [
                entries_service_1.EntriesService
            ],
            styles: [
                "\n        .hideIt {\n          display: none;\n        }\n        "
            ],
            directives: [image_directives_1.PhotoLoadDirective]
        }), 
        __metadata('design:paramtypes', [entries_service_1.EntriesService, router_deprecated_1.Router, router_deprecated_1.RouteParams])
    ], EntryComponent);
    return EntryComponent;
}());
exports.EntryComponent = EntryComponent;
//# sourceMappingURL=entry.component.js.map