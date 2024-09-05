import { Album, Artist, Song } from "./models";

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
