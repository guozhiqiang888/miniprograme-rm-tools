import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FilterComponent } from './filter.component';
// import { CreateprospectModule } from './features/createprospect/createprospect.module';
import { HeaderlistModule } from "../headerlist/headerlist.module"
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HeaderlistModule
  ],
  exports:[FilterComponent],
  providers: []
})
export class FilterModule { }
