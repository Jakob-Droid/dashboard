import { ThemePickerComponent } from 'projects/ngx-dashboard/src/lib/shared/theme/theme-picker/theme-picker.component';
import { NgxDashboardModule } from 'projects/ngx-dashboard/src/public-api';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewWidgetTypeComponent } from './new-widget-type/new-widget-type.component';

@NgModule({
    declarations: [AppComponent, NewWidgetTypeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxDashboardModule,
        ThemePickerComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
