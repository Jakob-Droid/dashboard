import { Subject } from 'rxjs';

import { Injectable } from '@angular/core';

import { Theme } from './models/theme.model';

@Injectable()
export class ThemePickerNotifierService {
    private _themeChanged = new Subject<Theme>();
    themeChanged$ = this._themeChanged.asObservable();

    newTheme(selectedTheme: Theme): void {
        this._themeChanged.next(selectedTheme);
    }
}
