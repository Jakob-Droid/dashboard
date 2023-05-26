import { GridsterItem } from 'angular-gridster2';
import { Subject } from 'rxjs';

import { Injectable } from '@angular/core';

export type GridsterItemWithId = GridsterItem & { widgetId: string };

@Injectable({ providedIn: 'root' })
export class WidgetResizeService {
    private resize = new Subject<GridsterItemWithId>();
    resizeChanged$ = this.resize.asObservable();

    resizeChanged(gridsterItem: GridsterItem, id: string) {
        const gridsterItemWithId: GridsterItemWithId = { ...gridsterItem, widgetId: id };
        this.resize.next(gridsterItemWithId);
    }
}
