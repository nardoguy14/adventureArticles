class utils {
    public static CopyProperties(source:any, target:any):void {
        for(var prop in source){

            if(target[prop] !== undefined){
                target[prop] = source[prop];
            }
            else {
                console.error("Cannot set undefined property: " + prop);
            }
        }
    }
}

export class Entry {
    id: number;
    name: string;
    title: string;
    picture: string;
}

export interface EntryBlock {}

export class Picture implements EntryBlock {
    title: string = ''
    picture: string = ''
    note: string = ''

    constructor(source) {
        this.init(source);
    }

    init(source){
        utils.CopyProperties(source,this);
    }
}

export class PictureSquareSet implements EntryBlock {
    constructor(
        public pictures: Picture[],
        public note: string,
        public gutters: boolean = true,
        public squarePictures: boolean = false
    ) {}
}

export class Title {
    constructor(public upperTitle: string, public mainTitle: string, public lowerTitle: string){}
}

export class EntryHeader {
    constructor(public picture: Picture, public title: Title, public note: string) {
    }
}

export class EntryText implements EntryBlock {
    constructor(public header: string, public text: string[] = null) {}
}

export class EntryVideo implements EntryBlock {
    constructor(public source: string) {}
}

export class EntryArticle {
    constructor(public header: EntryHeader, public blocks: EntryBlock[]) {}
}