import { Injectable } from '@angular/core';
import {
    Entry, EntryBlock, Picture, PictureSquareSet, EntryHeader, Title, EntryText, EntryVideo,
    EntryArticle
} from './entry';
import {MammothEntry} from './mammoth.entry'
import { OnInit } from '@angular/core';

@Injectable()
export class EntriesService {

    entries: Entry[] = [
        {id: 11, name: 'mammoth',    title: 'Eastern Sierras.', picture: './mammothSet/7K2A6178'},
        {id: 12, name: 'washington', title: 'Washington',       picture: './washingtonSet/19'}
    ];

    idToArticle = [
        {id: 11, article: MammothEntry.getEntry()}
    ]

    getEntries(): Promise<Entry[]> {
        return Promise.resolve(this.entries)
    }

    getEntry(id: number): Promise<EntryArticle> {
       var article = this.idToArticle.filter(entry => entry.id == id)[0].article
        console.log("jiii")
        console.log(article)
       return Promise.resolve(article)
    }
}