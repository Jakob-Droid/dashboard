import { Directive, ElementRef, Input } from '@angular/core';

import { ThemeName } from './theme-picker/models/theme-names.model';
import { Theme } from './theme-picker/models/theme.model';
import { ThemeConfig } from './theme-picker/models/themes.config';

@Directive({
    selector: '[ngxTheme][theme]',
})
export class ThemeDirective {
    @Input() set theme(value: Theme | undefined) {
        this._theme = value;

        this.changeTheme();
    }
    private defaultTheme = ThemeConfig[ThemeName.dark];
    private _theme!: Theme | undefined;

    constructor(private elementRef: ElementRef<HTMLElement>) {}

    changeTheme() {
        const userThemeOrDefault = this._theme ?? this.defaultTheme;
        Object.entries(userThemeOrDefault).forEach(
            ([key, value]: [string, string]) => {
                this.elementRef.nativeElement.style.setProperty(
                    `--${key}`,
                    value,
                );
            },
        );
    }
}
