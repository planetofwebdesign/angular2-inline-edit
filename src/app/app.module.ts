import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { InlineEditModule } from "./inline-edit/inline-edit.module";
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    BubbleChartComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InlineEditModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
