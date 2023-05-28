import { ReplaySubject } from 'rxjs';

import { Injectable } from '@angular/core';

import { ThemeName } from './models/theme-names.model';

@Injectable()
export class ThemePickerNotifierService {
    private _themeChanged = new ReplaySubject<ThemeName>(1);
    themeChanged$ = this._themeChanged.asObservable();

    newTheme(selectedTheme: ThemeName): void {
        this._themeChanged.next(selectedTheme);
    }
}
