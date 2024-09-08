import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RelatedEntitySelectorService } from './related-entity-selector.service';
import { Observable } from 'rxjs';
import { Artist } from '../../data/artist/artist.interface';

@Component({
  templateUrl: './related-entity-selector.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RelatedEntitySelectorComponent implements OnInit {
  relatedEntitySelector1$: Observable<Artist> = this.relatedEntitySelectorService.relatedEntitySelector1$;

  constructor(private relatedEntitySelectorService: RelatedEntitySelectorService) { }

  ngOnInit(): void {
  }

}
