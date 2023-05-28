import { Type } from '@angular/core';

import { WidgetOptionsBase } from '../../models/widget-options-base.model';
import { WidgetBaseComponent } from '../../widget-base/widget-base.component';
import { NumberWidgetComponent } from '../number-widget.component';
import { NumberWidgetInputs } from './number-widget-inputs.model';

export class NumberWidgetOptions extends WidgetOptionsBase {
    override get inputs(): NumberWidgetInputs {
        return this._inputs;
    }
    override get type(): Type<WidgetBaseComponent> {
        return this._type;
    }

    private _type: Type<WidgetBaseComponent> = NumberWidgetComponent;
    private _inputs!: NumberWidgetInputs;
}
