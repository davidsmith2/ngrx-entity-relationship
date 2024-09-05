import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';

import {Artist} from '../models';

@Injectable({providedIn: 'root'})
export class ArtistCollection extends EntityCollectionServiceBase<Artist> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Artist', serviceElementsFactory);
    }
}
