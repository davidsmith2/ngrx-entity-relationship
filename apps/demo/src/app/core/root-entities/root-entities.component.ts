import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RootEntitiesService } from './root-entities.service';
import { Observable } from 'rxjs';
import { Fight } from '../../data/store/models';

@Component({
  selector: 'ngrx-entity-relationship-root-entity',
  templateUrl: './root-entities.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootEntitiesComponent implements OnInit {
  rootEntities$: Observable<Array<Fight>> = this.rootEntitiesService.rootEntities$;

  constructor(private rootEntitiesService: RootEntitiesService) { }

  ngOnInit(): void { }

}
