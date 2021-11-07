import '@emotion/react';
import { Font, PaletteType, SpacingIndex, ThemeType } from './types';

const direction = 'rtl';
// export interface ThemeType {
//   direction: 'rtl' | 'ltr',
//   palette: Palette,
//   rgba: (color: RgbColor, opacity: number) => string,
//   spacings: number[],
//   spacing: (...values: SpacingIndex[]) => string,
//   font: Font,
//   radius: Radius,
//   mixins: Mixins,
//   breakpoints: Breakpoints,
//   logicalProp: LogicalPropFunc,
//   zIndex: typeof zIndex,
// }

const palette: PaletteType = {
  'white': 'rgb(255, 255, 255)',
  'black': 'rgb(0, 0, 0)',
  'navyBlue': 'rgb(45, 68, 114)',
  'success': 'rgb(40, 180, 136)',
  'error': 'rgb(231, 76, 60)',
  'gray1': 'rgb(42, 56, 64)',
  'gray2': 'rgb(124, 150, 166)',
  'gray3': 'rgb(153, 177, 191)',
};

const spacings = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 6, 8, 16];
const spacing: (...values: SpacingIndex[]) => string = (...values) => (
  values.map((v) => `${spacings[v]}rem`).join(' ')
);

const fontSizes = [0.6, 0.85, 1, 1.33, 2.2, 3.8];
const font: Font = {
  sizes: fontSizes,
  size: (v = 1) => `${fontSizes[v]}rem`,
};

const theme: ThemeType = {
  direction,
  palette,
  spacing,
  spacings,
  font,
};

export default theme;

