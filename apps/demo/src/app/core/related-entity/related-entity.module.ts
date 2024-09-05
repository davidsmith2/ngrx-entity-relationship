import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RelatedEntityComponent } from "./related-entity.component";
import { RelatedEntityResolver } from "./related-entity.resolver";
import { RelatedEntityService } from "./related-entity.service";

@NgModule({
    declarations: [RelatedEntityComponent],
    imports: [CommonModule],
    exports: [RelatedEntityComponent],
    providers: [RelatedEntityResolver, RelatedEntityService]
})
export class RelatedEntityModule {

}