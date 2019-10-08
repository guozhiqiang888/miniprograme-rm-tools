import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderlistComponent } from './headerlist.component';
import { CommonModule } from '@angular/common';
// import { CreateprospectModule } from './features/createprospect/createprospect.module';

@NgModule({
  declarations: [
    HeaderlistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  exports:[HeaderlistComponent],
  providers: []
})
export class HeaderlistModule { }
