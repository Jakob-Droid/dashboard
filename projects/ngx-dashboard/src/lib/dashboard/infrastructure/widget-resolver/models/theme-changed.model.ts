import { Theme } from '../../../../shared/theme/theme-picker/models/theme.model';

export type ThemeChanged = {
    theme: Theme;
    widgetId: string;
};
