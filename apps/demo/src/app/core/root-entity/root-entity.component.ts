import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RootEntityService } from './root-entity.service';

@Component({
  selector: 'ngrx-entity-relationship-root-entity',
  templateUrl: './root-entity.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootEntityComponent implements OnInit {
  constructor(
    public readonly s: RootEntityService
  ) { }

  ngOnInit(): void { }

}
