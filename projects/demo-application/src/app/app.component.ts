import { Component } from '@angular/core';
import {
    NumberWidgetComponent,
    NumberWidgetInputs,
    ThemeName,
    WidgetOptionsBase,
} from '@ngx-dashboard';

import { NewWidgetTypeComponent } from './new-widget-type/new-widget-type.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    widgets: WidgetOptionsBase[] = [
        {
            gridsterOptions: {
                cols: 2,
                rows: 1,
                y: 0,
                x: 0,
                dragEnabled: false,
            },
            id: '12345678910',
            inputs: {
                numberText: '42',
                title: 'Solumn Plexus',
                subBodyContent: 'Citizens in welfare',
            } as NumberWidgetInputs,
            theme: ThemeName.orangy,
            type: NumberWidgetComponent,
        },
        {
            gridsterOptions: {
                cols: 1,
                rows: 1,
                y: 1,
                x: 1,
            },
            id: '12345678',
            inputs: {
                numberText: '45',
                title: 'some other title',
                subBodyContent: 'Citizens without welfare',
            } as NumberWidgetInputs,
            type: NumberWidgetComponent,
        },
        {
            gridsterOptions: {
                cols: 1,
                rows: 1,
                y: 2,
                x: 2,
                dragEnabled: true,
            },
            id: '12345678142548',
            inputs: {},
            type: NewWidgetTypeComponent,
        },
    ];
}
