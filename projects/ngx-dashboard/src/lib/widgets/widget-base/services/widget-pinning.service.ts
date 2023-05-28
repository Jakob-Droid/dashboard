import { ReplaySubject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable()
export class WidgetPinningService {
    startValue = false;

    private _isPinned = new ReplaySubject<boolean>(1);
    isPinned$ = this._isPinned.asObservable();

    setPinned(isPinned: boolean) {
        this._isPinned.next(isPinned);
    }
}
