import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { ThemeDirective } from './theme.directive';

@NgModule({
    declarations: [ThemePickerComponent, ThemeDirective],
    imports: [CommonModule, FormsModule],
    exports: [ThemePickerComponent, ThemeDirective],
})
export class ThemeModule {}
