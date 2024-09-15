import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FromGraphService } from './from-graph.service';

@Component({
  templateUrl: './from-graph.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FromGraphComponent implements OnInit {

  constructor(public readonly s: FromGraphService) { }

  ngOnInit(): void {
  }

}
