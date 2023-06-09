import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDashboardModule, ThemeModule } from '@ngx-dashboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewWidgetTypeComponent } from './new-widget-type/new-widget-type.component';

@NgModule({
    declarations: [AppComponent, NewWidgetTypeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxDashboardModule,
        ThemeModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
