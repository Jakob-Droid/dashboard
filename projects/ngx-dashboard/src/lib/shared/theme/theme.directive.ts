import { Directive, ElementRef, Input } from '@angular/core';

import { ThemeName } from './theme-picker/models/theme-names.model';
import { Theme } from './theme-picker/models/theme.model';
import { ThemeConfig } from './theme-picker/models/themes.config';

@Directive({
    selector: '[ngxTheme][theme]',
})
export class ThemeDirective {
    @Input({ required: true }) set theme(value: ThemeName | undefined) {
        this._theme = value;

        this.changeTheme();
    }

    private defaultTheme = ThemeName.dark;
    private _theme!: ThemeName | undefined;

    constructor(private elementRef: ElementRef<HTMLElement>) {}

    changeTheme() {
        const userThemeOrDefault =
            ThemeConfig[this._theme ?? this.defaultTheme];

        this.changeCustomCssProperties(userThemeOrDefault);
    }

    private changeCustomCssProperties(userThemeOrDefault: Theme) {
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
