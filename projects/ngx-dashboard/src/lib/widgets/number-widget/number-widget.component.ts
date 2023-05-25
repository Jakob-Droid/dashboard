import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NumberWidgetInputs } from './models/number-widget-inputs.model';

@Component({
    selector: 'ngx-number-widget',
    templateUrl: './number-widget.component.html',
    styleUrls: ['./number-widget.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberWidgetComponent implements NumberWidgetInputs {
    @Input() numberText!: string;
    @Input() title!: string;
}
