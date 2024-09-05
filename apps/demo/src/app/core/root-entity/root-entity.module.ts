import { NgModule } from "@angular/core";
import { RootEntityComponent } from "./root-entity.component";
import { RootEntityResolver } from "./root-entity.resolver";
import { RootEntityService } from "./root-entity.service";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [RootEntityComponent],
    imports: [CommonModule],
    exports: [RootEntityComponent],
    providers: [RootEntityResolver, RootEntityService]
})
export class RootEntityModule {

}