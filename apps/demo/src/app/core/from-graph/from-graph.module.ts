import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FromGraphComponent } from './from-graph.component';
import { RouterModule } from '@angular/router';
import { FromGraphService } from './from-graph.service';

@NgModule({
  declarations: [
    FromGraphComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FromGraphComponent
      }
    ])
  ],
  exports: [
    FromGraphComponent
  ],
  providers: [FromGraphService]
})
export class FromGraphModule {
  constructor(private fromGraphService: FromGraphService) {
    this.fromGraphService.hydrateCache();
  }
}
