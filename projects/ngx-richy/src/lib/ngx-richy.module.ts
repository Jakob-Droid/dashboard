import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FontSelectorComponent } from './rich-text-editor/font-selector/font-selector.component';
import { FontSizeSelectorComponent } from './rich-text-editor/font-size-selector/font-size-selector.component';
import { HeaderSelectorComponent } from './rich-text-editor/header-selector/header-selector.component';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
    declarations: [
        RichTextEditorComponent,
        FontSelectorComponent,
        FontSizeSelectorComponent,
        HeaderSelectorComponent,
    ],
    imports: [CommonModule, MaterialModule, FormsModule],
    exports: [RichTextEditorComponent],
})
export class NgxRichyModule {}
