import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { InputtextComponent } from './inputtext/inputtext.component';
import { ReadabilityComponent } from './readability/readability.component';
import { SentimentComponent } from './sentiment/sentiment.component';
import {ReadabilityService} from './readability.service'

@NgModule({
  declarations: [
    AppComponent,
    InputtextComponent,
    SentimentComponent,
    ReadabilityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [ReadabilityService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
