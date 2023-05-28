import { Type } from '@angular/core';

import { WidgetOptionsBase } from '../../models/widget-options-base.model';
import { WidgetBaseDirective } from '../../widget-base/widget-base.component';
import { NumberWidgetComponent } from '../number-widget.component';
import { NumberWidgetInputs } from './number-widget-inputs.model';

export class NumberWidgetOptions extends WidgetOptionsBase {
    override get inputs(): NumberWidgetInputs {
        return this._inputs;
    }
    override get type(): Type<WidgetBaseDirective> {
        return this._type;
    }

    private _type: Type<WidgetBaseDirective> = NumberWidgetComponent;
    private _inputs!: NumberWidgetInputs;
}
