import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RootEntityService } from './root-entity.service';
import { Observable } from 'rxjs';
import { Artist, TransformedArtist } from '../store/models';

@Component({
  selector: 'ngrx-entity-relationship-root-entity',
  templateUrl: './root-entity.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootEntityComponent implements OnInit {
  rootEntity1$: Observable<Artist> = this.rootEntityService.rootEntity1$;
  rootEntity2$: Observable<TransformedArtist> = this.rootEntityService.rootEntity2$;

  constructor(private rootEntityService: RootEntityService) { }

  ngOnInit(): void { }

}
