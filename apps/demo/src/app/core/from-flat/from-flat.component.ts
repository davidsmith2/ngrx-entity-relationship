import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FromFlatService } from './from-flat.service';

@Component({
  templateUrl: './from-flat.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FromFlatComponent implements OnInit {

  constructor(public readonly s: FromFlatService) { }

  ngOnInit(): void {
  }

}
