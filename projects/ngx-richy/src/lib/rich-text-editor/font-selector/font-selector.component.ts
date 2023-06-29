import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';

@Component({
    selector: 'ry-font-selector',
    templateUrl: './font-selector.component.html',
    styleUrls: ['./font-selector.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FontSelectorComponent {
    @Input() fonts!: string[];
    @Input() defaultFont!: string;
    @Output() fontChanged = new EventEmitter();
}
