import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    TemplateRef,
} from '@angular/core';

@Component({
    selector: 'ngx-widget-container',
    templateUrl: './widget-container.component.html',
    styleUrls: ['./widget-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetContainerComponent {
    @ContentChild('header') header?: TemplateRef<any> | undefined;
    @ContentChild('body') body?: TemplateRef<any> | undefined;
    @ContentChild('footer') footer?: TemplateRef<any> | undefined;
}
