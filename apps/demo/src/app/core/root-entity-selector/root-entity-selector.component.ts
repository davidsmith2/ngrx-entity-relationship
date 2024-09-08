import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RootEntitySelectorService } from './root-entity-selector.service';

@Component({
  templateUrl: './root-entity-selector.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootEntitySelectorComponent implements OnInit {
  constructor(public readonly s: RootEntitySelectorService) { }

  ngOnInit(): void {
  }

}
