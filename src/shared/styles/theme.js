const primary = {
  primary: '#4D66FF',
  primaryDark: '#293BAD',
  primaryDarkGrey: '#70707c',
  primaryLight: '#F1F3FF',
  primaryBorder: '#D9D9D9',
  primaryBlack: '#121212',
  primaryHover: '#6C82FF',
};

const secondary = {
  secondary: '#c6c6c6',
  secondaryDark: '#717171',
  secondaryLight: '#f6f6f6',
  black: '#000',
  white: '#fff',
};

const status = {
  info: '#9149FF',
  bgInfo: '#F7F1FF',
  warning: '#D24600',
  bgWarning: '#FCF1EB',
  success: '#1B8900',
  bgSuccess: '#EDF6EB',
  error: '#EE0019',
  errorHover: '#BE0114',
  errorActive: '#86010E',
  delete: '#CC111C',
  bgError: '#FEEBED',
  statusError: '#cc111c',
};

const typography = {
  text: secondary.black,
  textImportant: primary.primary,
  textAdditional: secondary.dark,
};

const components = {
  // Buttons Color
  btn: primary.primary, // default
  btnHover: '#3C52D9',
  btnFocus: primary.dark, // active && focus
  btnDisabled: '#E0E3F9',
  btnUnlock: '#1BA303',

  // Sidebar
  monochromeDefault: '#8C8C99',
  newMonochromeDefault: '#B4B4BF',
  greyMonochromeLight: '#e9e9ed',
  neutralLight: '#d1d1d9',
};

const icons = {
  primary: '#4E64F6',
};

export const theme = {
  palette: {
    ...primary,
    ...secondary,
    ...status,
    ...typography,
    ...components,
    ...icons,
  },
  main: '#0A2750',
  secondary: primary.primary,
  third: primary.primaryBorder,
  fourth: primary.primaryLight,
  background: primary.primaryLight,
  error: status.error,
  accent: primary.primary,
  white: secondary.white,
  disabled: secondary.light,
  dark: secondary.black,
  darkGrey: secondary.dark,
  lightGrey: secondary.secondary,
  orange: status.warning,
  blue: primary.primary,
  black: secondary.black,
  green: status.success,
  blueNormal: primary.primary,
  primaryBlack: primary.primaryBlack,
  primaryDarkGrey: primary.primaryDarkGrey,
  primaryHover: primary.primaryHover,
  monochromeDefault: components.monochromeDefault,
  newMonochromeDefault: components.newMonochromeDefault,
  greyMonochromeLight: components.greyMonochromeLight,
  neutralLight: components.neutralLight,
  fill: icons.primary,
};
