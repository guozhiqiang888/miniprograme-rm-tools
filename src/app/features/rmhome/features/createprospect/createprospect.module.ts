
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from '@angular/common'
import { Routes, RouterModule } from "@angular/router"
import { CreateprospectComponent } from './createprospect.component'
import { createRouter } from './createprospect.router'
import { ItemsComponent } from '../../../../../components/items/items.component'
import { AlertComponent } from '../../../../../components/alertbox/alert.component'
import { CommenService } from '../../../../services/commen.service'

@NgModule({
  declarations: [
    CreateprospectComponent,
    ItemsComponent,
    AlertComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forChild(createRouter)
  ],
  exports:[
    CommonModule,
    CreateprospectComponent
  ],
  providers: [CommenService]
})
export class CreateprospectModule { }
