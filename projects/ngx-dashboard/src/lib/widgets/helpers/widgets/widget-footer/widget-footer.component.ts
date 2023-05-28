import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'ngx-widget-footer',
    templateUrl: './widget-footer.component.html',
    styleUrls: ['./widget-footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetFooterComponent {}
