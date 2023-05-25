import { GridsterModule } from 'angular-gridster2';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThemeDirective } from '../shared/theme/theme.directive';
import { DashboardComponent } from './dashboard.component';
import { WidgetResolverComponent } from './infrastructure/widget-resolver/widget-resolver.component';

@NgModule({
    declarations: [DashboardComponent, WidgetResolverComponent, ThemeDirective],
    imports: [CommonModule, GridsterModule],
    exports: [DashboardComponent],
})
export class DashboardModule {}
