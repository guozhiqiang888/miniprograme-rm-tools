
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from '@angular/common'
import { Routes, RouterModule } from "@angular/router"
import { ProspectDetailsComponent } from './prospectdetails.component'
import { createRouter } from './prospectdetails.router'
import { RequestService } from 'src/app/commenService/request.service';
import { AlertModule } from 'src/components/alertbox/alert.module';
import { ItemsModule } from 'src/components/items/items.module';
import { StatusModule } from './features/status/status.module';
import { CommenService } from 'src/app/services/commen.service';
import { ProspectDetailsService } from './prospectdetails.service';
@NgModule({
  declarations: [
    ProspectDetailsComponent,
  ],
  imports: [
    FormsModule,
    HttpModule,
    CommonModule,
    ItemsModule,
    AlertModule,
    StatusModule,
    RouterModule.forChild(createRouter)
  ],
  exports:[
    CommonModule,
    ProspectDetailsComponent
  ],
  providers: [CommenService,RequestService,ProspectDetailsService]

})
export class ProspectDetailsModule { }
