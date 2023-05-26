import { tap } from 'rxjs';

import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

import { WidgetResizeService } from './widget-resize.service';

@Component({
    selector: '',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetBaseComponent implements OnInit {
    widgetResizeService = inject(WidgetResizeService);

    ngOnInit(): void {
        this.widgetResizeService.resizeChanged$.pipe(tap());
    }
}
