import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WidgetBaseComponent } from '@ngx-dashboard';

@Component({
    selector: 'app-new-widget-type',
    templateUrl: './new-widget-type.component.html',
    styleUrls: ['./new-widget-type.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewWidgetTypeComponent extends WidgetBaseComponent {}
