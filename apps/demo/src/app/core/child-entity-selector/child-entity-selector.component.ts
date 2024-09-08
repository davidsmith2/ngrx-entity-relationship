import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChildEntitySelectorService } from './child-entity-selector.service';
import { Observable } from 'rxjs';
import { Artist } from '../../data/artist/artist.interface';

@Component({
  templateUrl: './child-entity-selector.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildEntitySelectorComponent implements OnInit {
  childEntitySelector1$: Observable<Artist> = this.childEntitySelectorService.childEntitySelector1$;

  constructor(private childEntitySelectorService: ChildEntitySelectorService) { }

  ngOnInit(): void {
  }

}
