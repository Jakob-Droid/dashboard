import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WidgetBodyComponent } from '../helpers/widget-body/widget-body.component';
import { WidgetContainerComponent } from '../helpers/widget-container/widget-container.component';
import { WidgetFooterComponent } from '../helpers/widget-footer/widget-footer.component';
import { WidgetHeaderComponent } from '../helpers/widget-header/widget-header.component';
import { NumberWidgetComponent } from '../number-widget/number-widget.component';

@NgModule({
    declarations: [NumberWidgetComponent, WidgetContainerComponent, WidgetHeaderComponent, WidgetFooterComponent, WidgetBodyComponent],
    imports: [CommonModule],
    exports: [NumberWidgetComponent, WidgetContainerComponent, WidgetHeaderComponent, WidgetFooterComponent, WidgetBodyComponent],
})
export class WidgetModule {}
