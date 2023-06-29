import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'ry-rich-text-editor',
    templateUrl: './rich-text-editor.component.html',
    styleUrls: ['./rich-text-editor.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RichTextEditorComponent {}
