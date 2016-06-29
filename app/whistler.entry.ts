import {
    Entry, EntryBlock, Picture, PictureSquareSet, EntryHeader, Title, EntryText, EntryVideo,
    EntryArticle
} from './entry';

export module WhistlerEntry {
    var dir = "./whistler/"
    let mobile = /iPad|iPhone|iPod|Android/.test(navigator.userAgent)
    if(mobile)
        dir += "xs/"

    console.log(dir)
    console.log(navigator.userAgent)

    let entryBlocks: EntryBlock[] = [
        new EntryText(
            "I.",
            [
                "Whistler. The pinacle for winter and summer outdoor adventure. Epic skiing and boarding in alpine regions in the winter, and world class mountain bike park open in the summer with pros all around.",
                "It's great knowing someone who lives in the center of it all to show you everything great Whistler has to offer."
            ]
        ),

        new Picture({title: "", picture: dir + "4"}),
        new Picture({title: "", picture: dir + "2"}),
        new Picture({title: "", picture: dir + "5"}),
        new Picture({title: "", picture: dir + "6"}),
        new Picture({title: "", picture: dir + "9"}),
        new Picture({title: "", picture: dir + "8"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir + "12"}),
                new Picture({picture: dir + "18"})
            ],
            ''
        ),
        new Picture({title: "", picture: dir + "13"}),
        new Picture({title: "", picture: dir + "14"}),
        new Picture({title: "", picture: dir + "17"}),
        new Picture({title: "", picture: dir + "19"}),
        new Picture({title: "", picture: dir + "23"}),
        new Picture({title: "", picture: dir + "25"}),
        new Picture({title: "", picture: dir + "27"}),
        new Picture({title: "", picture: dir + "26"}),
        new Picture({title: "", picture: dir + "29"}),
        new Picture({title: "", picture: dir + "31"}),
        new Picture({title: "", picture: dir + "30"}),
        new Picture({title: "", picture: dir + "33"}),
        new Picture({title: "", picture: dir + "35"}),
        new Picture({title: "", picture: dir + "36"}),
        new Picture({title: "", picture: dir + "39"}),
        new Picture({title: "", picture: dir + "40"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir + "43"}),
                new Picture({picture: dir + "44"})
            ],
            ''
        ),
        new Picture({title: "", picture: dir + "45"}),
        new Picture({title: "", picture: dir + "41"}),
        new Picture({title: "", picture: dir + "46"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir + "47"}),
                new Picture({picture: dir + "48"})
            ],
            ''
        ),
        new Picture({title: "", picture: dir + "49"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir + "51"}),
                new Picture({picture: dir + "52"}),
                new Picture({picture: dir + "53"}),
                new Picture({picture: dir + "54"})
            ],
            ''
        ),
        new Picture({title: "", picture: dir + "55"}),
        new Picture({title: "", picture: dir + "61"}),
        new Picture({title: "", picture: dir + "65"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir + "62"}),
                new Picture({picture: dir + "64"})
            ],
            ''
        ),
        new EntryText(
            "II.",
            [
            ]
        ),
        new Picture({title: "", picture: dir + "67"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir + "68"}),
                new Picture({picture: dir + "69"})
            ],
            ''
        ),
        new Picture({title: "", picture: dir + "71"}),
        new Picture({title: "", picture: dir + "74"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir + "72"}),
                new Picture({picture: dir + "73"})
            ],
            ''
        ),
        new Picture({title: "", picture: dir + "75"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir + "77"}),
                new Picture({picture: dir + "78"})
            ],
            ''
        ),
        new Picture({title: "", picture: dir + "76"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir + "79"}),
                new Picture({picture: dir + "80"})
            ],
            ''
        ),
        new Picture({title: "", picture: dir + "81"}),
        new Picture({title: "", picture: dir + "83"}),
        new Picture({title: "", picture: dir + "82"}),
        new Picture({title: "", picture: dir + "87"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir + "88"}),
                new Picture({picture: dir + "89"})
            ],
            ''
        ),
        new Picture({title: "", picture: dir + "90"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir + "91"}),
                new Picture({picture: dir + "92"}),
                new Picture({picture: dir + "93"}),
                new Picture({picture: dir + "85"})


            ],
            ''
        ),
        new Picture({title: "", picture: dir + "94"}),
        new Picture({title: "", picture: dir + "95"}),
        new EntryVideo(dir + "whistler")

    ]

    let entryHeader: EntryHeader = new EntryHeader(
        new Picture({picture: dir + "66"}),
        new Title("", "Whistlerland", "by Nardo + Ryan"),
        ""
    )

    export function getEntry(): EntryArticle {
        return new EntryArticle(entryHeader, entryBlocks)
    }
}