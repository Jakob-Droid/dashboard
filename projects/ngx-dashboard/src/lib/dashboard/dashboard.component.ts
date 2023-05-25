import { GridsterConfig, GridsterItem } from 'angular-gridster2';

import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';

import { WidgetOptionsBase } from '../widgets/models/widget-options-base.model';
import { ThemeChanged } from './infrastructure/widget-resolver/theme-changed.model';

@Component({
    selector: 'ngx-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
    @Input() widgetOptions!: WidgetOptionsBase[];

    options!: GridsterConfig;
    dashboard!: Array<GridsterItem>;

    static itemChange(item: any, itemComponent: any) {
        console.info('itemChanged', item, itemComponent);
    }

    static itemResize(item: any, itemComponent: any) {
        console.info('itemResized', item, itemComponent);
    }

    ngOnInit() {
        this.options = {
            itemChangeCallback: DashboardComponent.itemChange,
            itemResizeCallback: DashboardComponent.itemResize,
        };

        this.dashboard = [
            { cols: 2, rows: 1, y: 0, x: 0 },
            { cols: 2, rows: 2, y: 0, x: 2 },
        ];
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

    removeItem(item: any) {
        this.dashboard.splice(this.dashboard.indexOf(item), 1);
    }

    addItem() {
        this.dashboard.push({} as GridsterItem);
    }

    onThemeChanged(selectedTheme: ThemeChanged) {
        const changedWidgetTheme = this.widgetOptions.find(
            (widget) => widget.id === selectedTheme.widgetId
        );

        if (!changedWidgetTheme) {
            return;
        }

        changedWidgetTheme.theme = selectedTheme.theme;

        this.widgetOptions = [
            ...this.widgetOptions.filter(
                (widget) => widget.id !== selectedTheme.widgetId
            ),
            changedWidgetTheme,
        ];
    }
}
