import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { CreateprospectModule } from './features/createprospect/createprospect.module';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import {NgbModule,NgbDatepickerModule,NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
      ItemsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    NgbModule
  ],
  exports:[ItemsComponent],
  providers: []
})
export class ItemsModule { }
