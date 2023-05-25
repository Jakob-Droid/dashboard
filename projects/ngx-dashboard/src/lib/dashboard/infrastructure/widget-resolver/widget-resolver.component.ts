import { map, Subject, takeUntil } from 'rxjs';

import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';

import { ThemePickerNotifierService } from '../../../shared/theme/theme-picker/theme-picker-notifier.service';
import { WidgetOptionsBase } from '../../../widgets/models/widget-options-base.model';
import { ThemeChanged } from './theme-changed.model';

@Component({
    selector: 'ngx-widget-resolver',
    templateUrl: './widget-resolver.component.html',
    styleUrls: ['./widget-resolver.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ThemePickerNotifierService],
})
export class WidgetResolverComponent implements OnInit {
    @Input() widgetOptions!: WidgetOptionsBase;
    @Output() themeChanged = new EventEmitter<ThemeChanged>();

    @ViewChild('widgetContainer', { static: true, read: ViewContainerRef })
    widgetViewContainerRef!: ViewContainerRef;

    private destroy = new Subject<void>();

    constructor(
        private themePickerNotiferService: ThemePickerNotifierService
    ) {}

    ngOnInit(): void {
        this.createWidgets();
        this.themePickerNotiferService.themeChanged$
            .pipe(
                map(
                    (theme) =>
                        ({
                            theme: theme,
                            widgetId: this.widgetOptions.id,
                        } as ThemeChanged)
                ),
                takeUntil(this.destroy)
            )
            .subscribe((widgetIdWithTheme) =>
                this.themeChanged.emit(widgetIdWithTheme)
            );
    }

    private createWidgets() {
        const widgetComponentRef = this.widgetViewContainerRef.createComponent(
            this.widgetOptions.type
        );

        Object.entries(this.widgetOptions.inputs).forEach(
            ([key, value]: [string, unknown]) => {
                widgetComponentRef.setInput(key, value);
            }
        );
    }
}
