import { Album } from "../album/album.interface";

export class TransformedArtist {
  constructor(public data: Artist) { }
}

export interface Artist {
  name: string;
  albumTitle: string;
  album: Album;
}

