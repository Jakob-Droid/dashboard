import { map, Observable } from 'rxjs';

import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    OnInit,
    Output,
} from '@angular/core';

import { ThemeName } from './models/theme-names.model';
import { ThemeConfig } from './models/themes.config';
import { ThemePickerNotifierService } from './theme-picker-notifier.service';

@Component({
    selector: 'ngx-theme-picker',
    templateUrl: './theme-picker.component.html',
    styleUrls: ['./theme-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemePickerComponent implements OnInit {
    @Output() selectedTheme = new EventEmitter<ThemeName>();

    themes = ThemeConfig;
    currentTheme$!: Observable<ThemeName>;

    constructor(
        private themePickerNotifierService: ThemePickerNotifierService,
    ) {}

    ngOnInit(): void {
        this.currentTheme$ = this.themePickerNotifierService.themeChanged$.pipe(
            map((theme) => {
                console.log(theme);
                if (!theme) {
                    return ThemeName.dark;
                }
                return theme;
            }),
        );
    }

    onSelectTheme(selectedThemeKey: string) {
        const selectedTheme = selectedThemeKey as ThemeName;

        this.selectedTheme.emit(selectedTheme);
        this.themePickerNotifierService.newTheme(selectedTheme);
    }
}
