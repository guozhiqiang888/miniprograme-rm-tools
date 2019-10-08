import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HeaderlistModule } from "../../../../components/headerlist/headerlist.module"
import { CommonModule } from "@angular/common";
import { CommenService } from "src/app/services/commen.service";


import { NgxEchartsModule } from "ngx-echarts"
import { PerformaceComponent } from './performace.component'
import { RouterModule } from "@angular/router";
import { perfprmaceRouter } from "./performace.router";
@NgModule({
    declarations: [
      PerformaceComponent
    ],
    imports: [
      FormsModule,
      HttpModule,
      CommonModule,
      HeaderlistModule,
      NgxEchartsModule,
      RouterModule.forChild(perfprmaceRouter) 
    ],
    exports:[CommonModule,PerformaceComponent],
    providers: [CommenService]
  })
export class PerformaceModule{};