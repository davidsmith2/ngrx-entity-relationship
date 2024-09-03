import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RelatedEntityService } from './related-entity.service';
import { Observable } from 'rxjs';
import { Fight } from '../../data/store/models';

@Component({
  selector: 'ngrx-entity-relationship-root-entity',
  templateUrl: './related-entity.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RelatedEntityComponent implements OnInit {
  relatedEntity1$: Observable<Fight> = this.relatedEntityService.relatedEntity1$;

  constructor(private relatedEntityService: RelatedEntityService) { }

  ngOnInit(): void { }

}
