import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChildEntityService } from './child-entity.service';
import { Observable } from 'rxjs';
import { Artist } from '../store/models';

@Component({
  templateUrl: './child-entity.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildEntityComponent implements OnInit {
  childEntity1$: Observable<Artist> = this.childEntityService.childEntity1$;

  constructor(private childEntityService: ChildEntityService) { }

  ngOnInit(): void {
  }

}
