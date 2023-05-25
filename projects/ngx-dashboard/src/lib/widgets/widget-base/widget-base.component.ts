import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'ngx-widget-base',
    templateUrl: './widget-base.component.html',
    styleUrls: ['./widget-base.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetBaseComponent {}
