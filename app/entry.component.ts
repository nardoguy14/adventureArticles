import { Component, OnInit } from '@angular/core';
import { EntriesService } from './entries.service';
import {Entry, EntryBlock, Picture, PictureSquareSet, EntryHeader, EntryVideo, EntryText, EntryArticle} from "./entry";
import { Router, RouteParams } from '@angular/router-deprecated';
import {MammothEntry} from './mammoth.entry'


@Component({
    selector: 'entry',
    templateUrl: 'app/entry.component.html',
    providers: [
        EntriesService
    ]
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
