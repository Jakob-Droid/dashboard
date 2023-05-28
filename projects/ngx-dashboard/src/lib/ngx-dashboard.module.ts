import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardModule } from './dashboard/dashboard.module';
import { ThemeModule } from './shared/theme/theme.module';
import { WidgetModule } from './widgets/widget-base/widget.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, DashboardModule, WidgetModule, ThemeModule],
    exports: [DashboardModule, WidgetModule, ThemeModule],
})
export class NgxDashboardModule {}
