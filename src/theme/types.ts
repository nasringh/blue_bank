import '@emotion/react';

export type SpacingIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type RgbColor = `rgb(${number},${number},${number})`;
export type PaletteType = { [key: string]: RgbColor };
export type Colors = 'navyBlue' | 'white' | 'black' | 'success' | 'error' | 'gray1' | 'gray2' | 'gray3';
export type FontSizeIndex = 0 | 1 | 2 | 3 | 4 | 5;
export type Font = {
  size: (value: FontSizeIndex) => string,
  sizes: number[],
};

export interface ThemeType {
  direction: 'rtl' | 'ltr',
  palette: PaletteType;
  spacings: number[];
  spacing: (...values: SpacingIndex[]) => string;
  font: Font,
};
declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeType { }
}
