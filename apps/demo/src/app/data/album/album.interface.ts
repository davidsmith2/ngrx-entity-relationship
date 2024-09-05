import { Song } from "../song/song.interface";

export interface Album {
  title: string;
  artistName: string;
  songs?: Array<Song>;
}
