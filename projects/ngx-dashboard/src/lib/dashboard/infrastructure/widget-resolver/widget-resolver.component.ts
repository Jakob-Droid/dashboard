import { map, skip, Subject, takeUntil } from 'rxjs';

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

import { ThemeName } from '../../../shared/theme/theme-picker/models/theme-names.model';
import { ThemePickerNotifierService } from '../../../shared/theme/theme-picker/theme-picker-notifier.service';
import { WidgetOptionsBase } from '../../../widgets/models/widget-options-base.model';
import { WidgetPinningService } from '../../../widgets/widget-base/services/widget-pinning.service';
import { PinnedChanged } from './models/pinned-changed.model';
import { ThemeChanged } from './models/theme-changed.model';

@Component({
    selector: 'ngx-widget-resolver',
    templateUrl: './widget-resolver.component.html',
    styleUrls: ['./widget-resolver.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ThemePickerNotifierService, WidgetPinningService],
})
export class WidgetResolverComponent implements OnInit {
    @Input() widgetOptions!: WidgetOptionsBase;
    @Output() themeChanged = new EventEmitter<ThemeChanged>();
    @Output() pinnedChanged = new EventEmitter<PinnedChanged>();

    @ViewChild('widgetContainer', { static: true, read: ViewContainerRef })
    widgetViewContainerRef!: ViewContainerRef;

    private destroy = new Subject<void>();

    constructor(
        private themePickerNotiferService: ThemePickerNotifierService,
        private widgetPinningService: WidgetPinningService,
    ) {}

    ngOnInit(): void {
        this.createWidgets();
        this.themeChangedSubscription();
        this.pinnedChangedSubscription();
        this.setPinnedStartValue();
        this.setThemeStartValue();
    }

    private setThemeStartValue() {
        const selectedTheme = this.widgetOptions.theme ?? ThemeName.dark;

        this.themePickerNotiferService.newTheme(selectedTheme);
    }

    private setPinnedStartValue() {
        const isPinned =
            this.widgetOptions.gridsterOptions.dragEnabled === false;
        this.widgetPinningService.setPinned(isPinned);
    }

    private createWidgets() {
        const widgetComponentRef = this.widgetViewContainerRef.createComponent(
            this.widgetOptions.type,
        );

        Object.entries(this.widgetOptions.inputs).forEach(
            ([key, value]: [string, unknown]) => {
                widgetComponentRef.setInput(key, value);
            },
        );
    }

    private themeChangedSubscription() {
        this.themePickerNotiferService.themeChanged$
            .pipe(
                skip(1),
                map(
                    (theme) =>
                        ({
                            theme: theme,
                            widgetId: this.widgetOptions.id,
                        } as ThemeChanged),
                ),
                takeUntil(this.destroy),
            )
            .subscribe((widgetIdWithTheme) =>
                this.themeChanged.emit(widgetIdWithTheme),
            );
    }

    private pinnedChangedSubscription() {
        this.widgetPinningService.isPinned$
            .pipe(
                skip(1),
                map(
                    (isPinned) =>
                        ({
                            isPinned,
                            widgetId: this.widgetOptions.id,
                        } as PinnedChanged),
                ),
                takeUntil(this.destroy),
            )
            .subscribe((isPinned) => this.pinnedChanged.emit(isPinned));
    }
}
