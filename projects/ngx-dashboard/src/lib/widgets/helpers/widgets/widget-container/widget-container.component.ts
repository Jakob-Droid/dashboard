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
    @ContentChild('header') header?: TemplateRef<unknown> | undefined;
    @ContentChild('body') body?: TemplateRef<unknown> | undefined;
    @ContentChild('footer') footer?: TemplateRef<unknown> | undefined;
}
