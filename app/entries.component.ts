import { Component } from '@angular/core';
import { EntriesService } from './entries.service';
import {Entry} from "./entry";
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'entries',
    templateUrl: 'app/entries.component.html',
    providers: [
        EntriesService
    ]
})
export class EntriesComponent {

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

        this.selectedEntry = entry;
        let link = ['Entry', { id: entry.id }];
        this.router.navigate(link);

    }
}
