import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { CommenService } from "src/app/services/commen.service";
import { reportRouter } from "./reports.router"

// import { TabbarComponent } from '../../../components/tabbar/tabbar.component'
// import { reportRouter } from "./reports.router"

import { TabbarModule } from '../../../components/tabbar/tabbar.module'
import { ReportsComponent } from "./reports.component"
import { NgxEchartsModule } from "ngx-echarts"
import { PerformaceModule } from "./performace/performace.module"
import { ActivitiesModule } from "./activities/activities.module" 


@NgModule({
    declarations: [
        ReportsComponent
    ],
    imports: [
      HttpModule,
      CommonModule,
      TabbarModule,
      PerformaceModule,
      ActivitiesModule,
      NgxEchartsModule,
      RouterModule.forChild(reportRouter)
    ],
    exports:[ReportsComponent],
    providers: [CommenService]
  })
export class ReportsModule{};