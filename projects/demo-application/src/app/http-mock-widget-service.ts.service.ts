import { WidgetOptionsBase } from 'projects/ngx-dashboard/src/lib/widgets/models/widget-options-base.model';
import { NumberWidgetInputs } from 'projects/ngx-dashboard/src/lib/widgets/number-widget/models/number-widget-inputs.model';
import { NumberWidgetComponent } from 'projects/ngx-dashboard/src/lib/widgets/number-widget/number-widget.component';

import { Injectable } from '@angular/core';

import { WidgetOptionsDto } from './models/widget-options.dto';
import { NewWidgetTypeComponent } from './new-widget-type/new-widget-type.component';

@Injectable({
    providedIn: 'root',
})
export class HttpMockWidgetServiceTsService {
    constructor() {}

    getWidgets(): WidgetOptionsBase[] {
        return [
            {
                gridsterOptions: { cols: 2, rows: 1, y: 0, x: 0 },
                id: '12345678910',
                inputs: {
                    numberText: '42',
                    title: 'Solumn Plexus',
                } as NumberWidgetInputs,
                type: NumberWidgetComponent,
            },
            {
                gridsterOptions: { cols: 1, rows: 1, y: 1, x: 1 },
                id: '12345678',
                inputs: {
                    numberText: '45',
                    title: 'some other title',
                } as NumberWidgetInputs,
                type: NumberWidgetComponent,
            },
            {
                gridsterOptions: { cols: 1, rows: 1, y: 2, x: 2 },
                id: '12345678142548',
                inputs: {},
                type: NewWidgetTypeComponent,
            },
        ];
    }

    // This is what would be requested from the backend. The rest should be some kind of configuration for each.
    getWidgetDto(): WidgetOptionsDto[] {
        return [
            {
                id: '12345678910',
                y: 0,
                x: 0,
                dragEnabled: true,
            },
            {
                id: '12345678',
                y: 1,
                x: 1,
                dragEnabled: true,
            },
            {
                id: '12345678142548',
                y: 2,
                x: 2,
                dragEnabled: false,
            },
        ];
    }
}
