import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { ThemeModule } from '../shared/theme/theme.module';
import { WidgetBodyComponent } from './helpers/widgets/widget-body/widget-body.component';
import { WidgetContainerComponent } from './helpers/widgets/widget-container/widget-container.component';
import { WidgetFooterComponent } from './helpers/widgets/widget-footer/widget-footer.component';
import { WidgetHeaderComponent } from './helpers/widgets/widget-header/widget-header.component';
import { NumberWidgetComponent } from './number-widget/number-widget.component';
import { PinButtonComponent } from './helpers/buttons/pin-button/pin-button.component';

@NgModule({
    declarations: [
        NumberWidgetComponent,
        WidgetContainerComponent,
        WidgetHeaderComponent,
        WidgetFooterComponent,
        WidgetBodyComponent,
        PinButtonComponent,
    ],
    imports: [CommonModule, ThemeModule, MaterialModule],
    exports: [
        NumberWidgetComponent,
        WidgetContainerComponent,
        WidgetHeaderComponent,
        WidgetFooterComponent,
        WidgetBodyComponent,
    ],
})
export class WidgetModule {}
