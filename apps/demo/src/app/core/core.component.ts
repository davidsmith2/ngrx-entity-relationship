import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngrx-entity-relationship-core',
  templateUrl: './core.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
