import {
    Entry, EntryBlock, Picture, PictureSquareSet, EntryHeader, Title, EntryText, EntryVideo,
    EntryArticle
} from './entry';

export module TahoeNorthStarEntry {

    let dir = "./northstar/"

    let entryBlocks: EntryBlock[] = [
        new EntryText(
            "I.",
            [
            ]
        ),

        new Picture({title: "", picture: dir + "1"}),
        new Picture({title: "", picture: dir + "2"}),
        new Picture({title: "", picture: dir + "3"}),
        new Picture({title: "", picture: dir + "4"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir + "5"}),
                new Picture({picture: dir + "6"})

            ],
            ''
        ),
        new Picture({title: "", picture: dir + "7"}),
        new Picture({title: "", picture: dir + "9"}),
        new Picture({title: "", picture: dir + "10"}),
        new Picture({title: "", picture: dir + "11"}),
        new Picture({title: "", picture: dir + "13"}),
        new Picture({title: "", picture: dir + "15"}),
        new Picture({title: "", picture: dir + "14"}),
        new Picture({title: "", picture: dir + "16"}),
        new Picture({title: "", picture: dir + "17"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir + "18"}),
                new Picture({picture: dir + "19"}),
                new Picture({picture: dir + "20"}),
                new Picture({picture: dir + "21"})
            ],
            ''
        ),
        new Picture({picture: dir + "22"}),
        new Picture({picture: dir + "23"}),
        new Picture({picture: dir + "24"}),
        new Picture({picture: dir + "25"}),
        new Picture({picture: dir + "26"}),
        new Picture({picture: dir + "23"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir + "27"}),
                new Picture({picture: dir + "28"})
            ],
            ''
        ),
        new Picture({picture: dir + "29"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir + "30"}),
                new Picture({picture: dir + "31"})
            ],
            ''
        ),
        new Picture({picture: dir + "33"}),
        new Picture({picture: dir + "34"}),
        new Picture({picture: dir + "37"}),
        new Picture({picture: dir + "36"})
    ]

    let entryHeader: EntryHeader = new EntryHeader(
        new Picture({picture: dir + "32"}),
        new Title("A Day at", "Northstar Bike Park", "by Nardo + Kevin"),
        ""
    )

    export function getEntry(): EntryArticle {
        return new EntryArticle(entryHeader, entryBlocks)
    }
}