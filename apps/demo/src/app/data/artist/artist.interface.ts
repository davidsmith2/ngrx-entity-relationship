import { Album } from "../album/album.interface";

export interface Artist {
  name: string;
  albumTitle: string;
  album: Album;
}

