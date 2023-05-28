import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { WidgetPinningService } from '../../../widget-base/services/widget-pinning.service';

@Component({
    selector: 'ngx-pin-button',
    templateUrl: './pin-button.component.html',
    styleUrls: ['./pin-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PinButtonComponent {
    @Input() isPinned!: boolean | null;

    constructor(private widgetPinningService: WidgetPinningService) {}

    togglePin() {
        this.widgetPinningService.setPinned(!this.isPinned);
    }
}
