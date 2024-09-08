import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChildrenEntitiesService } from './children-entities.service';

@Component({
  templateUrl: './children-entities.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildrenEntitiesComponent implements OnInit {
  constructor(public readonly s: ChildrenEntitiesService) { }

  ngOnInit(): void {
  }

}
