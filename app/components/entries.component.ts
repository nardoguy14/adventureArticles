import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../services/entries.service';
import {Entry} from "../entry";
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'entries',
    templateUrl: 'app/html/entries.component.html',
    providers: [
        EntriesService
    ]
})
export class EntriesComponent implements OnInit {

    entries: Entry[];
    selectedEntry: Entry;
    constructor(private entriesService: EntriesService,
                private router: Router) { }
    ngOnInit() {
        this.entriesService.getEntries()
            .then(entries => this.entries = entries)
            // .then(hi => console.log(this.entries))
    }

    goToDetail(entry: Entry) {
        let mainBody = document.getElementById("mainBody")
        this.selectedEntry = entry;
        let link = ['Entry', { id: entry.id }];
        if(mainBody != null){
            mainBody.classList.add('animated', 'fadeOutLeft')
            setTimeout(() => {
                 this.router.navigate(link)
            }, 300)
        }
    }
}
