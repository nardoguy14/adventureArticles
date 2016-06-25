"use strict";
var entry_1 = require('./entry');
var WhistlerEntry;
(function (WhistlerEntry) {
    var dir = "./whistler/";
    var entryBlocks = [
        new entry_1.EntryText("I.", [
            "Whistler. The pinacle for winter and summer outdoor adventure. Epic skiing and boarding in alpine regions in the winter, and world class mountain bike park open in the summer with pros all around.",
            "It's great knowing someone who lives in the center of it all to show you everything great Whistler has to offer."
        ]),
        new entry_1.Picture({ title: "", picture: dir + "4" }),
        new entry_1.Picture({ title: "", picture: dir + "2" }),
        new entry_1.Picture({ title: "", picture: dir + "5" }),
        new entry_1.Picture({ title: "", picture: dir + "6" }),
        new entry_1.Picture({ title: "", picture: dir + "9" }),
        new entry_1.Picture({ title: "", picture: dir + "8" }),
        new entry_1.PictureSquareSet([
            new entry_1.Picture({ picture: dir + "12" }),
            new entry_1.Picture({ picture: dir + "18" })
        ], ''),
        new entry_1.Picture({ title: "", picture: dir + "13" }),
        new entry_1.Picture({ title: "", picture: dir + "14" }),
        new entry_1.Picture({ title: "", picture: dir + "17" }),
        new entry_1.Picture({ title: "", picture: dir + "19" }),
        new entry_1.Picture({ title: "", picture: dir + "23" }),
        new entry_1.Picture({ title: "", picture: dir + "25" }),
        new entry_1.Picture({ title: "", picture: dir + "27" }),
        new entry_1.Picture({ title: "", picture: dir + "26" }),
        new entry_1.Picture({ title: "", picture: dir + "29" }),
        new entry_1.Picture({ title: "", picture: dir + "31" }),
        new entry_1.Picture({ title: "", picture: dir + "30" }),
        new entry_1.Picture({ title: "", picture: dir + "33" }),
        new entry_1.Picture({ title: "", picture: dir + "35" }),
        new entry_1.Picture({ title: "", picture: dir + "36" }),
        new entry_1.Picture({ title: "", picture: dir + "39" }),
        new entry_1.Picture({ title: "", picture: dir + "40" }),
        new entry_1.PictureSquareSet([
            new entry_1.Picture({ picture: dir + "43" }),
            new entry_1.Picture({ picture: dir + "44" })
        ], ''),
        new entry_1.Picture({ title: "", picture: dir + "45" }),
        new entry_1.Picture({ title: "", picture: dir + "41" }),
        new entry_1.Picture({ title: "", picture: dir + "46" }),
        new entry_1.PictureSquareSet([
            new entry_1.Picture({ picture: dir + "47" }),
            new entry_1.Picture({ picture: dir + "48" })
        ], ''),
        new entry_1.Picture({ title: "", picture: dir + "49" }),
        new entry_1.PictureSquareSet([
            new entry_1.Picture({ picture: dir + "51" }),
            new entry_1.Picture({ picture: dir + "52" }),
            new entry_1.Picture({ picture: dir + "53" }),
            new entry_1.Picture({ picture: dir + "54" })
        ], ''),
        new entry_1.Picture({ title: "", picture: dir + "55" }),
        new entry_1.Picture({ title: "", picture: dir + "61" }),
        new entry_1.Picture({ title: "", picture: dir + "65" }),
        new entry_1.PictureSquareSet([
            new entry_1.Picture({ picture: dir + "62" }),
            new entry_1.Picture({ picture: dir + "64" })
        ], ''),
        new entry_1.EntryText("II.", []),
        new entry_1.Picture({ title: "", picture: dir + "67" }),
        new entry_1.PictureSquareSet([
            new entry_1.Picture({ picture: dir + "68" }),
            new entry_1.Picture({ picture: dir + "69" })
        ], ''),
        new entry_1.Picture({ title: "", picture: dir + "71" }),
        new entry_1.Picture({ title: "", picture: dir + "74" }),
        new entry_1.PictureSquareSet([
            new entry_1.Picture({ picture: dir + "72" }),
            new entry_1.Picture({ picture: dir + "73" })
        ], ''),
        new entry_1.Picture({ title: "", picture: dir + "75" }),
        new entry_1.PictureSquareSet([
            new entry_1.Picture({ picture: dir + "77" }),
            new entry_1.Picture({ picture: dir + "78" })
        ], ''),
        new entry_1.Picture({ title: "", picture: dir + "76" }),
        new entry_1.PictureSquareSet([
            new entry_1.Picture({ picture: dir + "79" }),
            new entry_1.Picture({ picture: dir + "80" })
        ], ''),
        new entry_1.Picture({ title: "", picture: dir + "81" }),
        new entry_1.Picture({ title: "", picture: dir + "83" }),
        new entry_1.Picture({ title: "", picture: dir + "82" }),
        new entry_1.Picture({ title: "", picture: dir + "87" }),
        new entry_1.PictureSquareSet([
            new entry_1.Picture({ picture: dir + "88" }),
            new entry_1.Picture({ picture: dir + "89" })
        ], ''),
        new entry_1.Picture({ title: "", picture: dir + "90" }),
        new entry_1.PictureSquareSet([
            new entry_1.Picture({ picture: dir + "91" }),
            new entry_1.Picture({ picture: dir + "92" }),
            new entry_1.Picture({ picture: dir + "93" }),
            new entry_1.Picture({ picture: dir + "85" })
        ], ''),
        new entry_1.Picture({ title: "", picture: dir + "94" }),
        new entry_1.Picture({ title: "", picture: dir + "95" }),
        new entry_1.EntryVideo(dir + "whistler")
    ];
    var entryHeader = new entry_1.EntryHeader(new entry_1.Picture({ picture: dir + "66" }), new entry_1.Title("", "Whistlerland", "by Nardo + Ryan"), "");
    function getEntry() {
        return new entry_1.EntryArticle(entryHeader, entryBlocks);
    }
    WhistlerEntry.getEntry = getEntry;
})(WhistlerEntry = exports.WhistlerEntry || (exports.WhistlerEntry = {}));
//# sourceMappingURL=whistler.entry.js.map