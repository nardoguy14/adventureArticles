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
var NavBarScrollDirective = (function () {
    function NavBarScrollDirective(el) {
        this.el = el.nativeElement;
        this.currentY = 0;
        this.lastCurrentY = 0;
    }
    NavBarScrollDirective.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () { return _this.scrollUpOrDown(); }, 250);
    };
    NavBarScrollDirective.prototype.scrollUpOrDown = function () {
        var currOffset = window.pageYOffset;
        if (this.lastCurrentY < currOffset) {
            this.el.classList.add('animated', 'fadeOutUp');
        }
        else if (currOffset < this.lastCurrentY) {
            this.el.classList.remove('fadeOutUp');
            this.el.classList.add('fadeInDown');
        }
        this.lastCurrentY = currOffset;
    };
    NavBarScrollDirective = __decorate([
        core_1.Directive({
            selector: '[navscroll]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], NavBarScrollDirective);
    return NavBarScrollDirective;
}());
exports.NavBarScrollDirective = NavBarScrollDirective;
//# sourceMappingURL=navbarscroll.directives.js.map