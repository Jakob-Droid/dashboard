import { GridsterItem } from 'angular-gridster2';

import { Type } from '@angular/core';

import { ThemeName } from '../../shared/theme/theme-picker/models/theme-names.model';
import { WidgetBaseComponent } from '../widget-base/widget-base.component';

export abstract class WidgetOptionsBase {
    id!: string;
    gridsterOptions!: GridsterItem;

    theme?: ThemeName | undefined;

    abstract get type(): Type<WidgetBaseComponent>;
    abstract get inputs(): object;
}
