import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';

import {Song} from '../models';

@Injectable({providedIn: 'root'})
export class SongCollection extends EntityCollectionServiceBase<Song> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Song', serviceElementsFactory);
    }
}
