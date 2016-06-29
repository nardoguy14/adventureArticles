import {
    Entry, EntryBlock, Picture, PictureSquareSet, EntryHeader, Title, EntryText, EntryVideo,
    EntryArticle
} from './entry';

export module WashingtonEntry {

    let dir = "./washingtonSet/"
    let mobile = /iPad|iPhone|iPod|Android/.test(navigator.userAgent)
    if(mobile)
        dir += "xs/"

    let entryBlocks: EntryBlock[] = [
        new EntryText(
            "Day 1.",
            [
            ]
        ),
        new Picture({title: "", picture: dir + "7"}),
        new Picture({title: "", picture: dir + "8"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir + "17"}),
                new Picture({picture: dir + "18"})
            ],
            ""
        ),
        new Picture({title: "", picture: dir + "19"}),
        new Picture({title: "", picture: dir + "28"}),
        new Picture({title: "", picture: dir + "smoke", extension: "gif"}),
        new Picture({title: "", picture: dir + "36"}),
        new Picture({title: "", picture: dir + "guy", extension: "gif"}),
        new Picture({title: "", picture: dir + "37"}),
        new Picture({title: "", picture: dir + "50"}),
        new Picture({title: "", picture: dir + "901"}),
        new Picture({title: "", picture: dir + "58"}),
        new Picture({title: "", picture: dir + "69"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir +"16"}),
                new Picture({picture: dir +"67"}),
            ],
            '',
            false,
            true
        ),
        new Picture({title: "", picture: dir + "79"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir +"75"}),
                new Picture({picture: dir +"77"}),
            ],
            '',
            false,
            true
        ),
        new Picture({title: "", picture: dir + "80"}),
        new Picture({title: "", picture: dir + "84"}),
        new Picture({title: "", picture: dir + "81"}),
        new Picture({title: "", picture: dir + "83"}),
        new Picture({title: "", picture: dir + "85"}),
        new Picture({title: "", picture: dir + "87"}),
        new EntryText(
            "Day 2.",
            [
            ]
        ),
        new Picture({title: "", picture: dir + "90"}),
        new Picture({title: "", picture: dir + "92"}),
        new Picture({title: "", picture: dir + "101"}),
        new Picture({title: "", picture: dir + "102"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir +"104"}),
                new Picture({picture: dir +"105"}),
                new Picture({picture: dir +"106"}),
                new Picture({picture: dir +"110"}),
            ],
            '',
            false,
            true
        ),
        new Picture({title: "", picture: dir + "800"})
    ]

    let entryHeader: EntryHeader = new EntryHeader(
        new Picture({picture: dir+"2"}),
        new Title("", "Ice Caves in the Northern Cascades", "Photography: Nardo + Amy"),
        "Staying friends with people who move away is no easy thing. Time passes new friends come up and life goes on, but if you manage to keep the friend its totally worth it. Every summer Amy comes to visit home but it took 10 years for me to finally make the trip out to her new home. Despite the constant strong rain near Seattle, Washington has a great deal of beauty to offer for those willing to go out and see it.")

    export function getEntry(): EntryArticle {
        return new EntryArticle(entryHeader, entryBlocks)
    }
}