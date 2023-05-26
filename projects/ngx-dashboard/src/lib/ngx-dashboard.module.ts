import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardModule } from './dashboard/dashboard.module';
import { ThemePickerComponent } from './shared/theme/theme-picker/theme-picker.component';
import { WidgetBodyComponent } from './widgets/helpers/widget-body/widget-body.component';
import { WidgetContainerComponent } from './widgets/helpers/widget-container/widget-container.component';
import { WidgetFooterComponent } from './widgets/helpers/widget-footer/widget-footer.component';
import { WidgetHeaderComponent } from './widgets/helpers/widget-header/widget-header.component';
import { NumberWidgetComponent } from './widgets/number-widget/number-widget.component';
import { WidgetBaseComponent } from './widgets/widget-base/widget-base.component';

@NgModule({
    declarations: [WidgetBaseComponent, NumberWidgetComponent, WidgetHeaderComponent, WidgetContainerComponent, WidgetBodyComponent, WidgetFooterComponent],
    imports: [CommonModule, DashboardModule, ThemePickerComponent],
    exports: [DashboardModule, WidgetHeaderComponent, WidgetContainerComponent, WidgetBodyComponent, WidgetFooterComponent],
})
export class NgxDashboardModule {}
