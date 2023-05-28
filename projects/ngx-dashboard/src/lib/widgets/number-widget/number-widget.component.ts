import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { WidgetBaseComponent } from '../widget-base/widget-base.component';
import { NumberWidgetInputs } from './models/number-widget-inputs.model';

@Component({
    selector: 'ngx-number-widget',
    templateUrl: './number-widget.component.html',
    styleUrls: ['./number-widget.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberWidgetComponent
    extends WidgetBaseComponent
    implements NumberWidgetInputs
{
    @Input() numberText!: string;
    @Input() title!: string;
}
