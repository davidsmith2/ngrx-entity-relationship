import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RootEntitiesService } from './root-entities.service';
import { Observable } from 'rxjs';
import { Artist } from '../../data/artist/artist.interface';

@Component({
  selector: 'ngrx-entity-relationship-root-entity',
  templateUrl: './root-entities.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootEntitiesComponent implements OnInit {
  rootEntities1$: Observable<Array<Artist>> = this.rootEntitiesService.rootEntities1$;

  constructor(private rootEntitiesService: RootEntitiesService) { }

  ngOnInit(): void { }

}
