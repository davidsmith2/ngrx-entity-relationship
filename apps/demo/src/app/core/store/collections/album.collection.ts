import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';

import {Album} from '../models';

@Injectable({providedIn: 'root'})
export class AlbumCollection extends EntityCollectionServiceBase<Album> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Album', serviceElementsFactory);
    }
}
