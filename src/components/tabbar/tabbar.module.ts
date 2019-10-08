import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { CreateprospectModule } from './features/createprospect/createprospect.module';
import { TabbarComponent } from './tabbar.component'
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    TabbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  exports:[TabbarComponent],
  providers: []
})
export class TabbarModule { }
