import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

import { ThemeName } from './models/theme-names.model';
import { Theme } from './models/theme.model';
import { ThemeConfig } from './models/themes.config';
import { ThemePickerNotifierService } from './theme-picker-notifier.service';

@Component({
    selector: 'ngx-theme-picker',
    templateUrl: './theme-picker.component.html',
    styleUrls: ['./theme-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemePickerComponent {
    themes = ThemeConfig;
    @Output() selectedTheme = new EventEmitter<Theme>();

    constructor(private themePickerNotifierService: ThemePickerNotifierService) {}

    onSelectTheme(selectedThemeKey: string) {
        const selectedTheme = this.themes[selectedThemeKey as ThemeName];

        this.selectedTheme.emit(selectedTheme);
        this.themePickerNotifierService.newTheme(selectedTheme);
    }
}
