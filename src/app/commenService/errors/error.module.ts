import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";
import { CommenService } from "src/app/services/commen.service";
import { ErrorComponent } from "./error.component";
import { errorRouter } from "./error.router";
import { RouterModule } from "@angular/router";



@NgModule({
    declarations: [
        ErrorComponent
    ],
    imports: [
      FormsModule,
      HttpModule,
      CommonModule,
      RouterModule.forChild(errorRouter) 
    ],
    exports:[ErrorComponent],
    providers: [CommenService]
  })
export class ErrorModule{};