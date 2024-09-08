import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RelatedEntitySelectorService } from './related-entity-selector.service';

@Component({
  templateUrl: './related-entity-selector.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RelatedEntitySelectorComponent implements OnInit {

  constructor(public readonly s: RelatedEntitySelectorService) { }

  ngOnInit(): void { }

}
