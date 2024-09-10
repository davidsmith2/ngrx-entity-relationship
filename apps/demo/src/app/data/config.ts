import { Album } from "./album/album.interface";
import { Artist } from "./artist/artist.interface";
import { Song } from "./song/song.interface";

export const entityConfig = {
    entityMetadata: {
        Artist: {
            selectId: (entity: Artist): string => entity.name,
        },
        Album: {
            selectId: (entity: Album): string => entity.title,
        },
        Song: {
            selectId: (entity: Song): string => entity.title,
        }
    }
};
