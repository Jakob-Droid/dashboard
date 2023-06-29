import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    OnInit,
    Output,
} from '@angular/core';

@Component({
    selector: 'ry-font-size-selector',
    templateUrl: './font-size-selector.component.html',
    styleUrls: ['./font-size-selector.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FontSizeSelectorComponent implements OnInit {
    @Output() fontSizeChanged = new EventEmitter<number>();

    currentFontSize!: string;

    private _numberedRegex = new RegExp('\\D+');
    private _defaultFontSize = 16;

    ngOnInit(): void {
        this.currentFontSize = `${this._defaultFontSize}px`;
    }

    onAddButtonClicked() {
        if (!this.currentFontSize) {
            const calculatedValue = 1;
            this.currentFontSize = `${calculatedValue}px`;
            return;
        }
        const numberedValue = this.currentFontSize.replace('px', '');
        const value = +numberedValue;
        const calculatedValue = value + 1;

        this.currentFontSize = `${calculatedValue}px`;
        this.fontSizeChanged.emit(value);
    }
    onMinusButtonClicked() {
        if (!this.currentFontSize) {
            return;
        }

        const numberedValue = this.currentFontSize.replace('px', '');
        const value = +numberedValue;

        if (value <= 0) {
            return;
        }

        const calculatedValue = value - 1;

        this.currentFontSize = `${calculatedValue}px`;
        this.fontSizeChanged.emit(value);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addPixelSuffix($event: any) {
        let pureNumbers = $event.target.value.replace(this._numberedRegex, '');

        if (+pureNumbers >= 0) {
            pureNumbers = this._defaultFontSize;
        }

        this.currentFontSize = `${pureNumbers}px`;
    }
}
