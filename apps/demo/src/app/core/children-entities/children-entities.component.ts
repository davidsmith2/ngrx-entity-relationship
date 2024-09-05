import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ChildrenEntitiesService } from './children-entities.service';
import { Album } from '../../data/album/album.interface';

@Component({
  templateUrl: './children-entities.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildrenEntitiesComponent implements OnInit {
  childrenEntities1$: Observable<Album> = this.childrenEntitiesService.childrenEntities1$;

  constructor(private childrenEntitiesService: ChildrenEntitiesService) { }

  ngOnInit(): void {
  }

}
