import { Subject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable()
export class WidgetPinningService {
    private _isPinned = new Subject<boolean>();
    isPinned$ = this._isPinned.asObservable();

    setPinned(isPinned: boolean) {
        this._isPinned.next(isPinned);
    }
}
