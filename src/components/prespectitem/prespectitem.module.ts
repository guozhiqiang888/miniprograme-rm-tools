import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { CreateprospectModule } from './features/createprospect/createprospect.module';
import { PrespectitemComponent } from './prespectitem.component'
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    PrespectitemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  exports:[PrespectitemComponent],
  providers: []
})
export class PrespectitemModule { }
