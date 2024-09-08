import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RootEntitySelectorService } from './root-entity-selector.service';
import { Observable } from 'rxjs';
import { Artist } from '../../data/artist/artist.interface';

@Component({
  templateUrl: './root-entity-selector.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootEntitySelectorComponent implements OnInit {
  rootEntitySelector1$: Observable<Artist> = this.rootEntitySelectorService.rootEntitySelector1$;

  constructor(private rootEntitySelectorService: RootEntitySelectorService) { }

  ngOnInit(): void {
  }

}
