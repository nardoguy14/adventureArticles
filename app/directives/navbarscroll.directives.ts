import { Directive, HostListener, ElementRef, Input, OnInit } from '@angular/core';
import {interval} from "rxjs/observable/interval";

@Directive({
    selector: '[navscroll]'
})
export class NavBarScrollDirective implements OnInit {

    private el:HTMLElement;
    private lastCurrentY: number;
    private currentY: number;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
        this.currentY = 0
        this.lastCurrentY = 0
    }

    ngOnInit (){
        setInterval(() => this.scrollUpOrDown(), 250)
    }

    scrollUpOrDown(){
        let currOffset = window.pageYOffset
        if(this.lastCurrentY < currOffset) {
            this.el.classList.add('animated', 'fadeOutUp')
        }
        else if(currOffset < this.lastCurrentY) {
            this.el.classList.remove('fadeOutUp')
            this.el.classList.add('fadeInDown')
        }
        this.lastCurrentY = currOffset
    }
}
