import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'ngx-widget-body',
    templateUrl: './widget-body.component.html',
    styleUrls: ['./widget-body.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetBodyComponent {}
