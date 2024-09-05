import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RootEntitiesComponent } from "./root-entities.component";
import { RootEntitiesResolver } from "./root-entities.resolver";
import { RootEntitiesService } from "./root-entities.service";

@NgModule({
    declarations: [RootEntitiesComponent],
    imports: [CommonModule],
    exports: [RootEntitiesComponent],
    providers: [RootEntitiesResolver, RootEntitiesService]
})
export class RootEntitiesModule {

}