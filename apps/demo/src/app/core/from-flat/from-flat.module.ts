import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FromFlatComponent } from './from-flat.component';
import { RouterModule } from '@angular/router';
import { FromFlatService } from './from-flat.service';

@NgModule({
  declarations: [
    FromFlatComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FromFlatComponent
      }
    ])
  ],
  exports: [
    FromFlatComponent
  ],
  providers: [FromFlatService]
})
export class FromFlatModule {
  constructor(private fromFlatService: FromFlatService) {
    this.fromFlatService.hydrateCache();
  }
}
