import { Component, OnInit, AfterViewChecked ,OnDestroy, AfterContentInit, AfterContentChecked,AfterViewInit} from '@angular/core';
import { EntriesService } from '../services/entries.service';
import {Entry, EntryBlock, Picture, PictureSquareSet, EntryHeader, EntryVideo, EntryText, EntryArticle} from "../entry";
import { Router, RouteParams } from '@angular/router-deprecated';
import {MammothEntry} from '../mammoth.entry'
import {PhotoLoadDirective} from '../directives/image.directives'

@Component({
    selector: 'entry',
    templateUrl: 'app/html/entry.component.html',
    providers: [
        EntriesService
    ],
    styles: [
        `
        .hideIt {
          display: none;
        }
        `
    ],
    directives: [PhotoLoadDirective]
})
export class EntryComponent implements OnInit {

    article: EntryArticle
    id: number

    constructor(private entriesService: EntriesService,
                private router: Router,
                private routeParams: RouteParams) { }


    ngOnInit() {
        this.id = +this.routeParams.get('id');
        this.getEntry(this.id)
    }

    getEntry(id: number) {
        this.entriesService.getEntry(this.id)
            .then(entry => this.article = entry)
    }

    isPicture(obj: EntryBlock){
        if(obj instanceof Picture)
            return true
        else
            return false
    }

    isPictureSet(obj: EntryBlock){
        if(obj instanceof PictureSquareSet) {
            return true
        }
        else
            return false
    }
    
    isVideo(obj: EntryBlock){
        if(obj instanceof EntryVideo) {
            return true
        }
        else 
            return false
    }

    isText(obj: EntryBlock){
        if(obj instanceof EntryText) {
            return true
        }
        else
            return false
    }
}
