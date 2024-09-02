import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngrx-entity-relationship-root-entity',
  templateUrl: './root-entity.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootEntityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
