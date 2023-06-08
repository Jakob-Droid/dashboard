import { ThemeName } from 'projects/ngx-dashboard/src/lib/shared/theme/theme-picker/models/theme-names.model';

export type ThemeChanged = {
    theme: ThemeName;
    widgetId: string;
};
