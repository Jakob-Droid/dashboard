import { WidgetBaseComponent } from 'projects/ngx-dashboard/src/lib/widgets/widget-base/widget-base.component';

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-new-widget-type',
    templateUrl: './new-widget-type.component.html',
    styleUrls: ['./new-widget-type.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewWidgetTypeComponent extends WidgetBaseComponent {}
