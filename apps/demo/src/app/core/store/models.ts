export interface Hero {
    uuid: string;
    heroName: string;
    fights?: Array<Fight>;
}

export interface Villain {
    uuid: string;
    villainName: string;
    fights?: Array<Fight>;
}

export interface Fight {
    id: string;
    villain?: Villain;
    villainId?: string;
    hero?: Hero;
    heroId?: string;
}

export interface Artist {
    name: string;
    albumTitle: string;
    album: Album;
}

export interface Album {
    title: string;
}

export interface Song {
    title: string;
}

export class TransformedArtist {
    constructor(public data: Artist) { }
}