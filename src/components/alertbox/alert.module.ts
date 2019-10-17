import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
// import { CreateprospectModule } from './features/createprospect/createprospect.module';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';


@NgModule({
  declarations: [
      AlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[AlertComponent],
  providers: []
})
export class AlertModule { }
