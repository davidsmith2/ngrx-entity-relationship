import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';

import {Artist} from './artist.interface';

@Injectable({providedIn: 'root'})
export class ArtistCollection extends EntityCollectionServiceBase<Artist> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Artist', serviceElementsFactory);
    }
}
