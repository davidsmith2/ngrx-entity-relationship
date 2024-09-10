import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RelatedEntityService } from './related-entity.service';

@Component({
  selector: 'ngrx-entity-relationship-root-entity',
  templateUrl: './related-entity.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RelatedEntityComponent implements OnInit {
  constructor(public readonly s: RelatedEntityService) { }

  ngOnInit(): void { }

}
