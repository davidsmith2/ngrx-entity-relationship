import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RootEntityService, TransformedFight } from './root-entity.service';
import { Observable } from 'rxjs';
import { Fight } from '../../data/store/models';

@Component({
  selector: 'ngrx-entity-relationship-root-entity',
  templateUrl: './root-entity.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootEntityComponent implements OnInit {
  rootEntity1$: Observable<Fight> = this.rootEntityService.rootEntity1$;
  rootEntity2$: Observable<TransformedFight> = this.rootEntityService.rootEntity2$;

  constructor(private rootEntityService: RootEntityService) { }

  ngOnInit(): void { }

}
