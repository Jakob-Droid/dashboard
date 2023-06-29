import { NgxRichyModule } from 'ngx-richy';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDashboardModule, ThemeModule } from '@ngx-dashboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardShowcaseComponent } from './dashboard-showcase/dashboard-showcase.component';
import { NewWidgetTypeComponent } from './dashboard-showcase/new-widget-type/new-widget-type.component';
import { RichTextEditorShowcaseComponent } from './rich-text-editor-showcase/rich-text-editor-showcase.component';

@NgModule({
    declarations: [
        AppComponent,
        NewWidgetTypeComponent,
        RichTextEditorShowcaseComponent,
        DashboardShowcaseComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxDashboardModule,
        NgxRichyModule,
        ThemeModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
