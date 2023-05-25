import { GridsterItem } from 'angular-gridster2';

import { Type } from '@angular/core';

import { Theme } from '../../shared/theme/theme-picker/models/theme.model';
import { WidgetBaseComponent } from '../widget-base/widget-base.component';

export abstract class WidgetOptionsBase {
    id!: string;
    gridsterOptions!: GridsterItem;

    theme?: Theme | undefined;

    abstract get type(): Type<WidgetBaseComponent>;
    abstract get inputs(): object;
}
