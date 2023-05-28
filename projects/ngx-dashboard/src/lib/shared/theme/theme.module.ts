import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { ThemeDirective } from './theme.directive';

@NgModule({
    declarations: [ThemePickerComponent, ThemeDirective],
    imports: [CommonModule],
    exports: [ThemePickerComponent, ThemeDirective],
})
export class ThemeModule {}
