import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { RouterModule } from '@angular/router';
import { statusRouter} from './status.router';
import { StatusComponent } from './status.component';
// import { HeaderlistComponent } from '../../../../../components/headerlist/headerlist.component'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { TranslateModule,TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

export function HttpLoaderFactory(httpClient:HttpClient){
  return new TranslateHttpLoader(httpClient,'./assets/i18n/','.json');
}
@NgModule({
  declarations: [
    StatusComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    }),
    RouterModule.forChild(statusRouter)
  ],
  exports:[
    CommonModule
  ],
  providers: []
})
export class StatusModule { }
