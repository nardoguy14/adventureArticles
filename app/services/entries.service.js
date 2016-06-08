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
const mammoth_entry_1 = require('../mammoth.entry');
let EntriesService = class EntriesService {
    constructor() {
        this.entries = [
            { id: 11, name: 'mammoth', title: 'Eastern Sierras.', picture: './mammothSet/7K2A6178' },
            { id: 12, name: 'washington', title: 'Washington', picture: './washingtonSet/19' }
        ];
        this.idToArticle = [
            { id: 11, article: mammoth_entry_1.MammothEntry.getEntry() }
        ];
    }
    getEntries() {
        return Promise.resolve(this.entries);
    }
    getEntry(id) {
        var article = this.idToArticle.filter(entry => entry.id == id)[0].article;
        return Promise.resolve(article);
    }
};
EntriesService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], EntriesService);
exports.EntriesService = EntriesService;
//# sourceMappingURL=entries.service.js.map