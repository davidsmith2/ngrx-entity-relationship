import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChildEntitySelectorService } from './child-entity-selector.service';

@Component({
  templateUrl: './child-entity-selector.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildEntitySelectorComponent implements OnInit {
  constructor(public readonly s: ChildEntitySelectorService) { }

  ngOnInit(): void {
  }

}
