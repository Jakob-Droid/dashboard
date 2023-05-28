import { Observable } from 'rxjs';

import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
} from '@angular/core';

import { WidgetOptionsBase } from '../models/widget-options-base.model';
import { WidgetPinningService } from './services/widget-pinning.service';

@Component({
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetBaseComponent {
    @Input() widgetOptions!: WidgetOptionsBase;

    private isPinnedService = inject(WidgetPinningService);

    isPinned$: Observable<boolean | null> = this.isPinnedService.isPinned$;
}
