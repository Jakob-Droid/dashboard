import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';

@Component({
    selector: 'ry-header-selector',
    templateUrl: './header-selector.component.html',
    styleUrls: ['./header-selector.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSelectorComponent {
    @Input() headers!: string[];
    @Output() headerChanged = new EventEmitter();
}
