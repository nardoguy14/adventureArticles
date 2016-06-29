"use strict";
var entry_1 = require('./entry');
var TahoeNorthStarEntry;
(function (TahoeNorthStarEntry) {
    var dir = "./northstar/";
    var mobile = /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
    if (mobile)
        dir += "xs/";
    var entryBlocks = [
        new entry_1.EntryText("I.", []),
        new entry_1.Picture({ title: "", picture: dir + "1" }),
        new entry_1.Picture({ title: "", picture: dir + "2" }),
        new entry_1.Picture({ title: "", picture: dir + "3" }),
        new entry_1.Picture({ title: "", picture: dir + "4" }),
        new entry_1.PictureSquareSet([
            new entry_1.Picture({ picture: dir + "5" }),
            new entry_1.Picture({ picture: dir + "6" })
        ], ''),
        new entry_1.Picture({ title: "", picture: dir + "7" }),
        new entry_1.Picture({ title: "", picture: dir + "9" }),
        new entry_1.Picture({ title: "", picture: dir + "10" }),
        new entry_1.Picture({ title: "", picture: dir + "11" }),
        new entry_1.Picture({ title: "", picture: dir + "13" }),
        new entry_1.Picture({ title: "", picture: dir + "15" }),
        new entry_1.Picture({ title: "", picture: dir + "14" }),
        new entry_1.Picture({ title: "", picture: dir + "16" }),
        new entry_1.Picture({ title: "", picture: dir + "17" }),
        new entry_1.PictureSquareSet([
            new entry_1.Picture({ picture: dir + "18" }),
            new entry_1.Picture({ picture: dir + "19" }),
            new entry_1.Picture({ picture: dir + "20" }),
            new entry_1.Picture({ picture: dir + "21" })
        ], ''),
        new entry_1.Picture({ picture: dir + "22" }),
        new entry_1.Picture({ picture: dir + "23" }),
        new entry_1.Picture({ picture: dir + "24" }),
        new entry_1.Picture({ picture: dir + "25" }),
        new entry_1.Picture({ picture: dir + "26" }),
        new entry_1.Picture({ picture: dir + "23" }),
        new entry_1.PictureSquareSet([
            new entry_1.Picture({ picture: dir + "27" }),
            new entry_1.Picture({ picture: dir + "28" })
        ], ''),
        new entry_1.Picture({ picture: dir + "29" }),
        new entry_1.PictureSquareSet([
            new entry_1.Picture({ picture: dir + "30" }),
            new entry_1.Picture({ picture: dir + "31" })
        ], ''),
        new entry_1.Picture({ picture: dir + "33" }),
        new entry_1.Picture({ picture: dir + "34" }),
        new entry_1.Picture({ picture: dir + "37" }),
        new entry_1.Picture({ picture: dir + "36" })
    ];
    var entryHeader = new entry_1.EntryHeader(new entry_1.Picture({ picture: dir + "32" }), new entry_1.Title("A Day at", "Northstar Bike Park", "by Nardo + Kevin"), "");
    function getEntry() {
        return new entry_1.EntryArticle(entryHeader, entryBlocks);
    }
    TahoeNorthStarEntry.getEntry = getEntry;
})(TahoeNorthStarEntry = exports.TahoeNorthStarEntry || (exports.TahoeNorthStarEntry = {}));
//# sourceMappingURL=tahoe_northstart.entry.js.map