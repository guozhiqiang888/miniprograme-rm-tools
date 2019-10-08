import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";
import { CommenService } from "src/app/services/commen.service";
import { DetailsComponent } from "./details.component"
import { RouterModule } from "@angular/router";
import { detailsRouter } from "./details.router";

@NgModule({
    declarations: [
      DetailsComponent
    ],
    imports: [
      FormsModule,
      HttpModule,
      CommonModule
      
    ],
    exports:[DetailsComponent],
    providers: [CommenService]
  })
export class DetailsModule{};