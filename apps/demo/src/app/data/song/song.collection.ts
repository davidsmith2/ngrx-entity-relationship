import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';

import {Song} from './song.interface';

@Injectable({providedIn: 'root'})
export class SongCollection extends EntityCollectionServiceBase<Song> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Song', serviceElementsFactory);
    }
}
