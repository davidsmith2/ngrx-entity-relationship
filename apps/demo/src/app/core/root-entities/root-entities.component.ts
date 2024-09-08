import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RootEntitiesService } from './root-entities.service';

@Component({
  selector: 'ngrx-entity-relationship-root-entity',
  templateUrl: './root-entities.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootEntitiesComponent implements OnInit {

  constructor(public readonly s: RootEntitiesService) { }

  ngOnInit(): void { }

}
