import { toRem } from 'theme/utils/to-rem';

const lineHeights = {
  short: 1.3,
  default: 1.4,
  tall: 1.5,
};

const fontSizes = {
  '6xl': toRem(68),
  '5xl': toRem(56),
  '4xl': toRem(46),
  '3xl': toRem(38),
  '2xl': toRem(30),
  xl: toRem(24),
  lg: toRem(20),
  'lg-alt': toRem(18),
  md: toRem(16),
  sm: toRem(14),
  xs: toRem(12),
};

const letterSpacings = {
  none: 0,
  tighter: -0.6,
  tight: -0.4,
  default: -0.2,
};

const fontWeights = {
  regular: 400,
  medium: 600,
  bold: 700,
};

const fonts = {
  heading: 'Lato, system-ui, sans-serif',
  body: 'Lato, system-ui, sans-serif',
};

export const typography = {
  letterSpacings,
  lineHeights,
  fontWeights,
  fonts,
  fontSizes,
};
