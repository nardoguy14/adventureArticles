import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
    selector: 'img[photo]'



})
export class PhotoLoadDirective {

    @HostListener('load', ['$event.target'])
    onClick(img) {
        this.el.setAttribute('display', 'show')
        this.el.classList.add('animated', 'fadeIn')
        this.el.classList.remove('hideIt')
    }

    private el:HTMLElement;
    constructor(el: ElementRef) { this.el = el.nativeElement; }
}
