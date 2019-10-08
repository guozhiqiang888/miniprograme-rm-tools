import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";
import { NgxEchartsModule } from "ngx-echarts"
import { ActivitiesComponent } from "./activities.component" 
import { DetailsModule } from "../details/details.module"
import { RouterModule } from "@angular/router";

import { activitiesRouter } from "./activities.router";

import { CommenService } from "src/app/services/commen.service";


@NgModule({
    declarations: [
      ActivitiesComponent
    ],
    imports: [
      FormsModule,
      HttpModule,
      CommonModule,
      DetailsModule,
      NgxEchartsModule,
      RouterModule.forChild(activitiesRouter) 
    ],
    exports:[ActivitiesComponent],
    providers: [CommenService]
  })
export class ActivitiesModule{};