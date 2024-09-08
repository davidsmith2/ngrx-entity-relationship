import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChildrenEntitiesSelectorService } from './children-entities-selector.service';

@Component({
  templateUrl: './children-entities-selector.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildrenEntitiesSelectorComponent implements OnInit {
  constructor(public readonly s: ChildrenEntitiesSelectorService) { }

  ngOnInit(): void {
  }

}
