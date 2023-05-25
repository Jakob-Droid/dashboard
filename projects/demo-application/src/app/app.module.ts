import { ThemePickerComponent } from 'projects/ngx-dashboard/src/lib/shared/theme/theme-picker/theme-picker.component';
import { NgxDashboardModule } from 'projects/ngx-dashboard/src/public-api';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
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
