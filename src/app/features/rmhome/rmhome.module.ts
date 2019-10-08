
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RmhomeComponent } from './rmhome.component';
import { RouterModule } from '@angular/router';
import { rmhomeRouter } from './rmhome.router'
import {CommonModule} from '@angular/common'
import { StatusModule } from './features/status/status.module';
import { TabbarModule } from '../../../components/tabbar/tabbar.module'
import { FilterModule } from "../../../components/filters/filter.module"
import { CreateprospectModule } from "./features/createprospect/createprospect.module"
import { PrespectitemModule } from "src/components/prespectitem/prespectitem.module";

import { RequestService } from "../../commenService/request.service"
import { StoreModule } from '@ngrx/store';
import { reducers,metaReducers } from './reducer';
@NgModule({
  declarations: [
    RmhomeComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    StatusModule,
    TabbarModule,
    FilterModule,
    CommonModule,
    CreateprospectModule,
    PrespectitemModule,
    StoreModule.forRoot(reducers,{metaReducers}),
    RouterModule.forChild(rmhomeRouter)
  ],
  exports:[],
  providers: [
    RequestService
  ]
})
export class RmhomeModule { }
