import { WidgetOptionsBase } from 'projects/ngx-dashboard/src/lib/widgets/models/widget-options-base.model';
import { NumberWidgetInputs } from 'projects/ngx-dashboard/src/lib/widgets/number-widget/models/number-widget-inputs.model';
import { NumberWidgetComponent } from 'projects/ngx-dashboard/src/lib/widgets/number-widget/number-widget.component';

import { Component, OnInit } from '@angular/core';

import { HttpMockWidgetServiceTsService } from './http-mock-widget-service.ts.service';
import { NewWidgetTypeComponent } from './new-widget-type/new-widget-type.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    widgets: WidgetOptionsBase[] = [
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

    constructor(private httpService: HttpMockWidgetServiceTsService) {}

    ngOnInit(): void {
        console.log(this.httpService.getWidgets());
    }
}
