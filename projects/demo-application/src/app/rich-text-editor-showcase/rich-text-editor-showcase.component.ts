import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-rich-text-editor-showcase',
    templateUrl: './rich-text-editor-showcase.component.html',
    styleUrls: ['./rich-text-editor-showcase.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RichTextEditorShowcaseComponent {}
