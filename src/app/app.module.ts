import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';
import { AppComponent } from './app.component';
import { DynamicModule } from 'ng-dynamic-component';
import { Widget1Component } from './Widgets/widget1/widget1.component';
import { Widget2Component } from './Widgets/widget2/widget2.component';
import { Widget3Component } from './Widgets/widget3/widget3.component';
import { Widget4Component } from './Widgets/widget4/widget4.component';
import { Widget5Component } from './Widgets/widget5/widget5.component';

@NgModule({
  declarations: [
    AppComponent,
    Widget1Component,
    Widget2Component,
    Widget3Component,
    Widget4Component,
    Widget5Component
  ],
  imports: [
    BrowserModule,GridsterModule,
    DynamicModule.withComponents([Widget1Component, Widget2Component, Widget3Component, Widget4Component, Widget5Component])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
