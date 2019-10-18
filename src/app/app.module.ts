import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules} from '@angular/router'
import { AppComponent } from './app.component';
import { appRouter } from './app.router';

import { HttpClientModule, HttpClient } from '@angular/common/http'
import { TranslateModule,TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export function HttpLoaderFactory(httpClient:HttpClient){
  return new TranslateHttpLoader(httpClient,'./assets/i18n/','.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    }),
    RouterModule.forRoot(appRouter,{ useHash:true , preloadingStrategy:PreloadAllModules})
  ],
  providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
