import { WidgetOptionsBase } from 'projects/ngx-dashboard/src/lib/widgets/models/widget-options-base.model';
import { NumberWidgetInputs } from 'projects/ngx-dashboard/src/lib/widgets/number-widget/models/number-widget-inputs.model';
import { NumberWidgetComponent } from 'projects/ngx-dashboard/src/lib/widgets/number-widget/number-widget.component';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class HttpMockWidgetServiceTsService {
    constructor() {}

    getWidgets(): WidgetOptionsBase[] {
        return [
            {
                id: '12345678910',
                inputs: {
                    numberText: '42',
                    title: 'Solumn Plexus',
                } as NumberWidgetInputs,
                type: NumberWidgetComponent,
            },
            {
                id: '12345678',
                inputs: {
                    numberText: '45',
                    title: 'some other title',
                } as NumberWidgetInputs,
                type: NumberWidgetComponent,
            },
        ];
    }
}
