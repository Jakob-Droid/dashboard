import { GridsterConfig } from 'angular-gridster2';

import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';

import { WidgetOptionsBase } from '../widgets/models/widget-options-base.model';
import { PinnedChanged } from './infrastructure/widget-resolver/models/pinned-changed.model';
import { ThemeChanged } from './infrastructure/widget-resolver/models/theme-changed.model';

@Component({
    selector: 'ngx-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
    @Input() widgetOptions!: WidgetOptionsBase[];

    options!: GridsterConfig;

    static itemChange(item: unknown, itemComponent: unknown) {
        console.info('itemChanged', item, itemComponent);
    }

    static itemResize(item: unknown, itemComponent: unknown) {
        console.info('itemResized', item, itemComponent);
    }

    ngOnInit() {
        this.options = this.getGridsterOptions();
    }

    private getGridsterOptions(): GridsterConfig {
        return {
            draggable: {
                enabled: true,
                dragHandleClass: 'drag-action-handler',
                ignoreContentClass: 'drag-ignore-handler',
                ignoreContent: true,
            },
            pushItems: true,
            floating: true,
            direction: 'horizontal',
            resizable: {
                enabled: true,
            },
            margins: 10,
            columns: 10,
            minCols: 10,
            maxCols: 50,
            minRows: 10,
            maxRows: 50,
            gridType: 'fixed',
            pushDirections: {
                north: false,
                east: true,
                west: false,
                south: true,
            },
            displayGrid: 'none',
        };
    }

    changedOptions() {
        if (
            !!this.options &&
            !!this.options.api &&
            !!this.options.api.optionsChanged
        ) {
            this.options.api.optionsChanged();
        }
    }

    onPinnedChanged(pinnedWidget: PinnedChanged) {
        const changedWidgetPinned = this.findSelectedWidget(
            pinnedWidget.widgetId,
        );

        if (!changedWidgetPinned) {
            return;
        }

        changedWidgetPinned.gridsterOptions.dragEnabled =
            !pinnedWidget.isPinned;

        this.updateWidgetList(pinnedWidget.widgetId, changedWidgetPinned);

        this.changedOptions();
    }

    onThemeChanged(selectedTheme: ThemeChanged) {
        const changedWidgetTheme = this.findSelectedWidget(
            selectedTheme.widgetId,
        );

        if (!changedWidgetTheme) {
            return;
        }

        changedWidgetTheme.theme = selectedTheme.theme;

        this.updateWidgetList(selectedTheme.widgetId, changedWidgetTheme);
    }

    private updateWidgetList(
        widgetId: string,
        changedWidgetPinned: WidgetOptionsBase,
    ) {
        this.widgetOptions = [
            ...this.widgetOptions.filter((widget) => widget.id !== widgetId),
            changedWidgetPinned,
        ];
    }

    private findSelectedWidget(widgetId: string) {
        return this.widgetOptions.find((widget) => widget.id === widgetId);
    }
}
