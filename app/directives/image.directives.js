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
var PhotoLoadDirective = (function () {
    function PhotoLoadDirective(el) {
        this.el = el.nativeElement;
    }
    PhotoLoadDirective.prototype.onClick = function (img) {
        this.el.setAttribute('display', 'show');
        this.el.classList.add('animated', 'fadeIn');
        this.el.classList.remove('hideIt');
    };
    __decorate([
        core_1.HostListener('load', ['$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], PhotoLoadDirective.prototype, "onClick", null);
    PhotoLoadDirective = __decorate([
        core_1.Directive({
            selector: 'img[photo]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], PhotoLoadDirective);
    return PhotoLoadDirective;
}());
exports.PhotoLoadDirective = PhotoLoadDirective;
//# sourceMappingURL=image.directives.js.map