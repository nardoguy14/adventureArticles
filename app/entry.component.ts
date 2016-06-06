import { Component } from '@angular/core';
import { EntriesService } from './entries.service';
import {Entry, EntryBlock, Picture, PictureSquareSet, EntryHeader, EntryVideo, EntryText} from "./entry";
import { Router, RouteParams } from '@angular/router-deprecated';


@Component({
    selector: 'entry',
    templateUrl: 'app/entry.component.html',
    providers: [
        EntriesService
    ]
})
export class EntryComponent {

    selectedEntry: Entry[]
    test: EntryBlock[]
    header: EntryHeader

    constructor(private entriesService: EntriesService,
                private router: Router,
                private routeParams: RouteParams) { }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.entriesService.getEntry(id)
            .then(entry => this.selectedEntry = [entry] )
            .then(entry => console.log(entry))
        
        this.test = this.entriesService.entryBlocks
        this.header = this.entriesService.entryHeader

        console.log(this.entriesService.entryBlocks[1])
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
