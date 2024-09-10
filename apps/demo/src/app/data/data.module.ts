import { NgModule } from "@angular/core";
import { EntityDataModule } from "@ngrx/data";
import { entityConfig } from "./config";

@NgModule({
    imports: [EntityDataModule.forRoot(entityConfig)]
})
export class DataModule { }