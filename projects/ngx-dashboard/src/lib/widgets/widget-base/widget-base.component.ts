import { Observable } from 'rxjs';

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { WidgetPinningService } from './services/widget-pinning.service';

@Component({
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetBaseComponent {
    private isPinnedService = inject(WidgetPinningService);

    isPinned$: Observable<boolean | null> = this.isPinnedService.isPinned$;
}
