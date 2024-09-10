import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChildEntityService } from './child-entity.service';

@Component({
  templateUrl: './child-entity.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildEntityComponent implements OnInit {
  constructor(public readonly s: ChildEntityService) { }

  ngOnInit(): void {
  }

}
