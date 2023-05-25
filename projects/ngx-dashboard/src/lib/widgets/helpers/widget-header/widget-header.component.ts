import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'ngx-widget-header',
    templateUrl: './widget-header.component.html',
    styleUrls: ['./widget-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetHeaderComponent {
    @Input() title: string = '';
}
