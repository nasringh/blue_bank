import '@emotion/react';

export type SpacingIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type RgbColor = `rgb(${number},${number},${number})`;
export type PaletteType = { [key: string]: RgbColor };
export interface ThemeType {
  direction: 'rtl' | 'ltr',
  palette: PaletteType;
  spacings: number[];
  spacing: (...values: SpacingIndex[]) => string;
};

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeType { }
}
