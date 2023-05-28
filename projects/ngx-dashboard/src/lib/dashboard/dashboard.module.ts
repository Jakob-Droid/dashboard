import { GridsterModule } from 'angular-gridster2';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThemeModule } from '../shared/theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { WidgetResolverComponent } from './infrastructure/widget-resolver/widget-resolver.component';

@NgModule({
    declarations: [DashboardComponent, WidgetResolverComponent],
    imports: [CommonModule, GridsterModule, ThemeModule],
    exports: [DashboardComponent],
})
export class DashboardModule {}
