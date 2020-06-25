const colors = {
  primary: '#7B0645',
  white: '#ffffff',
  lightgrey: '#F2F2F2',
  grey: '#646363',
  black: '#000000',
  blackAlpha: 'rgba(0, 0, 0, 0.8)',
};

const zIndex = {
  lvl1: 10,
  lvl2: 20,
  lvl3: 30,
  lvl4: 40,
  lvl5: 50,
  lvl6: 60,
  lvl7: 70,
};

const weight = {
  veryLight: 200,
  light: 300,
  regular: 400,
  semiBold: 500,
  bold: 600,
  veryBold: 700,
};

export const theme = {
  colors,
  zIndex,
  weight,
};

const breakpoints = {
  phone: 374,
  tablet: 767,
  bigTablet: 1020,
  desktop: 1200,
  bigDesktop: 1439,
  huge: 1700,
};

export const response = {
  phone: `(min-width: ${breakpoints.phone}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  bigTablet: `(min-width: ${breakpoints.bigTablet}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
  bigDesktop: `(min-width: ${breakpoints.bigDesktop}px)`,
  huge: `(min-width: ${breakpoints.huge}px)`,
};
