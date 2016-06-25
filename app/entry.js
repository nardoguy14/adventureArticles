"use strict";
var utils = (function () {
    function utils() {
    }
    utils.CopyProperties = function (source, target) {
        for (var prop in source) {
            if (target[prop] !== undefined) {
                target[prop] = source[prop];
            }
            else {
                console.error("Cannot set undefined property: " + prop);
            }
        }
    };
    return utils;
}());
var Entry = (function () {
    function Entry() {
    }
    return Entry;
}());
exports.Entry = Entry;
var Picture = (function () {
    function Picture(source) {
        this.title = '';
        this.picture = '';
        this.note = '';
        this.extension = 'jpg';
        this.init(source);
    }
    Picture.prototype.init = function (source) {
        utils.CopyProperties(source, this);
    };
    return Picture;
}());
exports.Picture = Picture;
var PictureSquareSet = (function () {
    function PictureSquareSet(pictures, note, gutters, squarePictures) {
        if (gutters === void 0) { gutters = true; }
        if (squarePictures === void 0) { squarePictures = false; }
        this.pictures = pictures;
        this.note = note;
        this.gutters = gutters;
        this.squarePictures = squarePictures;
    }
    return PictureSquareSet;
}());
exports.PictureSquareSet = PictureSquareSet;
var Title = (function () {
    function Title(upperTitle, mainTitle, lowerTitle) {
        this.upperTitle = upperTitle;
        this.mainTitle = mainTitle;
        this.lowerTitle = lowerTitle;
    }
    return Title;
}());
exports.Title = Title;
var EntryHeader = (function () {
    function EntryHeader(picture, title, note) {
        this.picture = picture;
        this.title = title;
        this.note = note;
    }
    return EntryHeader;
}());
exports.EntryHeader = EntryHeader;
var EntryText = (function () {
    function EntryText(header, text) {
        if (text === void 0) { text = null; }
        this.header = header;
        this.text = text;
    }
    return EntryText;
}());
exports.EntryText = EntryText;
var EntryVideo = (function () {
    function EntryVideo(source) {
        this.source = source;
    }
    return EntryVideo;
}());
exports.EntryVideo = EntryVideo;
var EntryArticle = (function () {
    function EntryArticle(header, blocks) {
        this.header = header;
        this.blocks = blocks;
    }
    return EntryArticle;
}());
exports.EntryArticle = EntryArticle;
//# sourceMappingURL=entry.js.map