import { ThemeName } from './theme-names.model';
import { Theme } from './theme.model';

export type Themes = {
    [name in ThemeName]: Theme;
};
