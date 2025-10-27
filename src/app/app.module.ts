import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';  
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HighchartsChartModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
