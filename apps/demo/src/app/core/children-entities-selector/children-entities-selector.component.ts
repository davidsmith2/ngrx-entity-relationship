import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChildrenEntitiesSelectorService } from './children-entities-selector.service';
import { Observable } from 'rxjs';
import { Album } from '../../data/album/album.interface';

@Component({
  templateUrl: './children-entities-selector.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildrenEntitiesSelectorComponent implements OnInit {
  childrenEntitiesSelector1$: Observable<Album> = this.childrenEntitiesSelectorService.childrenEntitiesSelector1$;

  constructor(private childrenEntitiesSelectorService: ChildrenEntitiesSelectorService) { }

  ngOnInit(): void {
  }

}
