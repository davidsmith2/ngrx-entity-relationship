import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RootEntityService } from './root-entity.service';
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
  fight$: Observable<Fight> = this.rootEntityService.fight$;

  constructor(private rootEntityService: RootEntityService) {
    console.log(this.rootEntityService)
  }

  ngOnInit(): void {
  }

}
