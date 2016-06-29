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
var mammoth_entry_1 = require('../mammoth.entry');
var washington_entry_1 = require('../washington.entry');
var whistler_entry_1 = require('../whistler.entry');
var tahoe_northstart_entry_1 = require('../tahoe_northstart.entry');
var EntriesService = (function () {
    function EntriesService() {
        this.entries = [
            { id: 11, name: 'mammoth', title: 'Eastern Sierras.', picture: './mammothSet/7K2A6178' },
            { id: 12, name: 'washington', title: 'Washington', picture: './washingtonSet/19' },
            { id: 13, name: 'whistler', title: 'Whistlerland', picture: './whistler/66' },
            { id: 14, name: 'northstar', title: 'NorthStar', picture: './northstar/15' }
        ];
        this.idToArticle = [
            { id: 11, article: mammoth_entry_1.MammothEntry.getEntry() },
            { id: 12, article: washington_entry_1.WashingtonEntry.getEntry() },
            { id: 13, article: whistler_entry_1.WhistlerEntry.getEntry() },
            { id: 14, article: tahoe_northstart_entry_1.TahoeNorthStarEntry.getEntry() }
        ];
    }
    EntriesService.prototype.getEntries = function () {
        return Promise.resolve(this.entries);
    };
    EntriesService.prototype.getEntry = function (id) {
        var article = this.idToArticle.filter(function (entry) { return entry.id == id; })[0].article;
        return Promise.resolve(article);
    };
    EntriesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EntriesService);
    return EntriesService;
}());
exports.EntriesService = EntriesService;
//# sourceMappingURL=entries.service.js.map