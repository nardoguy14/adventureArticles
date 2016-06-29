import { Injectable } from '@angular/core';
import {
    Entry, EntryBlock, Picture, PictureSquareSet, EntryHeader, Title, EntryText, EntryVideo,
    EntryArticle
} from '../entry';
import {MammothEntry} from '../mammoth.entry'
import {WashingtonEntry} from '../washington.entry'
import {WhistlerEntry} from '../whistler.entry'
import {TahoeNorthStarEntry} from '../tahoe_northstart.entry'

import { OnInit } from '@angular/core';

@Injectable()
export class EntriesService {

    entries: Entry[] = [
        {id: 11, name: 'mammoth',    title: 'Eastern Sierras.', picture: './mammothSet/7K2A6178'},
        {id: 12, name: 'washington', title: 'Washington',       picture: './washingtonSet/19'},
        {id: 13, name: 'whistler',   title: 'Whistlerland',     picture: './whistler/66'},
        {id: 14, name: 'northstar',   title: 'NorthStar',     picture: './northstar/15'}

    ];

    idToArticle = [
        {id: 11, article: MammothEntry.getEntry()},
        {id: 12, article: WashingtonEntry.getEntry()},
        {id: 13, article: WhistlerEntry.getEntry()},
        {id: 14, article: TahoeNorthStarEntry.getEntry()}
    ]

    getEntries(): Promise<Entry[]> {
        return Promise.resolve(this.entries)
    }

    getEntry(id: number): Promise<EntryArticle> {
       var article = this.idToArticle.filter(entry => entry.id == id)[0].article
       return Promise.resolve(article)
    }
}

