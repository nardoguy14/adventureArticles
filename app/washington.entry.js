"use strict";
var entry_1 = require('./entry');
var WashingtonEntry;
(function (WashingtonEntry) {
    var dir = "./washingtonSet/";
    var mobile = /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
    if (mobile)
        dir += "xs/";
    var entryBlocks = [
        new entry_1.EntryText("Day 1.", []),
        new entry_1.Picture({ title: "", picture: dir + "7" }),
        new entry_1.Picture({ title: "", picture: dir + "8" }),
        new entry_1.PictureSquareSet([
            new entry_1.Picture({ picture: dir + "17" }),
            new entry_1.Picture({ picture: dir + "18" })
        ], ""),
        new entry_1.Picture({ title: "", picture: dir + "19" }),
        new entry_1.Picture({ title: "", picture: dir + "28" }),
        new entry_1.Picture({ title: "", picture: dir + "smoke", extension: "gif" }),
        new entry_1.Picture({ title: "", picture: dir + "36" }),
        new entry_1.Picture({ title: "", picture: dir + "guy", extension: "gif" }),
        new entry_1.Picture({ title: "", picture: dir + "37" }),
        new entry_1.Picture({ title: "", picture: dir + "50" }),
        new entry_1.Picture({ title: "", picture: dir + "901" }),
        new entry_1.Picture({ title: "", picture: dir + "58" }),
        new entry_1.Picture({ title: "", picture: dir + "69" }),
        new entry_1.PictureSquareSet([
            new entry_1.Picture({ picture: dir + "16" }),
            new entry_1.Picture({ picture: dir + "67" }),
        ], '', false, true),
        new entry_1.Picture({ title: "", picture: dir + "79" }),
        new entry_1.PictureSquareSet([
            new entry_1.Picture({ picture: dir + "75" }),
            new entry_1.Picture({ picture: dir + "77" }),
        ], '', false, true),
        new entry_1.Picture({ title: "", picture: dir + "80" }),
        new entry_1.Picture({ title: "", picture: dir + "84" }),
        new entry_1.Picture({ title: "", picture: dir + "81" }),
        new entry_1.Picture({ title: "", picture: dir + "83" }),
        new entry_1.Picture({ title: "", picture: dir + "85" }),
        new entry_1.Picture({ title: "", picture: dir + "87" }),
        new entry_1.EntryText("Day 2.", []),
        new entry_1.Picture({ title: "", picture: dir + "90" }),
        new entry_1.Picture({ title: "", picture: dir + "92" }),
        new entry_1.Picture({ title: "", picture: dir + "101" }),
        new entry_1.Picture({ title: "", picture: dir + "102" }),
        new entry_1.PictureSquareSet([
            new entry_1.Picture({ picture: dir + "104" }),
            new entry_1.Picture({ picture: dir + "105" }),
            new entry_1.Picture({ picture: dir + "106" }),
            new entry_1.Picture({ picture: dir + "110" }),
        ], '', false, true),
        new entry_1.Picture({ title: "", picture: dir + "800" })
    ];
    var entryHeader = new entry_1.EntryHeader(new entry_1.Picture({ picture: dir + "2" }), new entry_1.Title("", "Ice Caves in the Northern Cascades", "Photography: Nardo + Amy"), "Staying friends with people who move away is no easy thing. Time passes new friends come up and life goes on, but if you manage to keep the friend its totally worth it. Every summer Amy comes to visit home but it took 10 years for me to finally make the trip out to her new home. Despite the constant strong rain near Seattle, Washington has a great deal of beauty to offer for those willing to go out and see it.");
    function getEntry() {
        return new entry_1.EntryArticle(entryHeader, entryBlocks);
    }
    WashingtonEntry.getEntry = getEntry;
})(WashingtonEntry = exports.WashingtonEntry || (exports.WashingtonEntry = {}));
//# sourceMappingURL=washington.entry.js.map