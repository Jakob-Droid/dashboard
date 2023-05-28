import { ThemeName } from 'dist/ngx-dashboard/lib/shared/theme/theme-picker/models/theme-names.model';

export type ThemeChanged = {
    theme: ThemeName;
    widgetId: string;
};
