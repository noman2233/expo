import {Dimensions} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
export const {width, height} = Dimensions.get('window');

export const COLORS = {
  // Error
  error: 'rgba(246, 86, 93, 1)',
  error80: '#dc143c', // same as jageer.com
  error100: 'rgb(233,31,39)', // dark red color
  error20: 'rgb(252,232,233)', // drawer  red color

  // social buttons color
  whatsapp: 'rgb(50,187,70)',
  call: 'rgb(25,135,84)',

  // Primary
  primary: '#275c2e',
  

  //  secondary  // about screen small buttons
  secondary: 'B2D0B4',
  secondary80: 'rgb(17,81,117)',

  //  tertialry   // Blog lisr screen
  tertiary: '#1D4733',

  // Dark
  dark: 'rgba(13, 15, 35, 1)',
  dark80: 'rgba(13, 15, 35, 0.7)',
  dark60: 'rgba(13, 15, 35, 0.6)',
  dark20: 'rgba(13, 15, 35, 0.2)',

  // text colors
  black: '#333333',
  black20: 'rgba(13, 15, 35, 0.6)',
  black40: 'rgba(13, 15, 35, 0.6)',

  // Grey
  grey: 'rgba(160, 161, 180, 1)',
  grey80: 'rgba(160, 161, 180, 0.8)',
  grey60: 'rgba(160, 161, 180, 0.6)',
  grey40: 'rgb(154,154,154)',
  grey20: 'rgb(230,230,230)',
  grey08: 'rgba(160, 161, 180, 0.08)',

  // Light Grey
  lightGrey: 'ffffff',
  lightGrey80: 'rgb(241,241,241)',
  lightGrey60: 'rgb(238,238,238)', // home screen input and category

  // dark  Grey
  darkGrey: '#ffffff',
  darkGrey80: 'rgba(0,0,0,.2)',
  // lightGrey80: 'rgba(247, 247, 247, 0.8)',

  // Light
  light: 'rgba(255, 255, 255, 1)',
  light80: 'rgba(255, 255, 255, 0.8)',
  light60: 'rgba(255, 255, 255, 0.6)',
  light20: 'rgba(255, 255, 255, 0.2)',
  light08: 'rgba(255, 255, 255, 0.08)',

  // background colors
  backgroundColor: 'rgb(249,249,249)',

  // background colors
  shimmerColor1: '#ebebeb',
  shimmerColor2: '#c5c5c5',
  shimmerColor3: '#ebebeb',
};

export const SIZES = {
  // global sizes
  base: responsiveFontSize(2),
  font: responsiveFontSize(2),
  radius: responsiveFontSize(1.9),
  padding: responsiveFontSize(24),
  margin: responsiveFontSize(20),

  // font sizes
  title: responsiveFontSize(22),
  // h1: 30,
  h2: responsiveFontSize(2.8),
  h3: responsiveFontSize(2.3), // walkthrough screen
  h4: responsiveFontSize(2.1),
  h5: responsiveFontSize(2.1),
  h6: responsiveFontSize(1.4),
  // body1: 30,
  // body2: 22,
  body3: responsiveFontSize(3),
  body4: responsiveFontSize(2.8),
  // body4: 16, from  extension
  body5: responsiveFontSize(2.5), // terms and condition screen text
  text1: responsiveFontSize(2.2),
  text2: responsiveFontSize(2),
  text3: responsiveFontSize(1.9),
  text4: responsiveFontSize(1.8),
  text5: responsiveFontSize(1.6),
  text6: responsiveFontSize(1.5),

  // small headings
  smallHeading1: 9,
  smallHeading2: 8,
  smallHeading3: 12,
  smallHeading4: 8,

  // paragraph1 fonts
  paragraph1: 13,
};

export const SmallHeadings = {
  h1: {fontFamily: 'Quicksand-Bold', fontSize: SIZES.smallHeading1},
  h2: {fontFamily: 'Quicksand-SemiBold', fontSize: SIZES.smallHeading2},
  h3: {fontFamily: 'Quicksand-Bold', fontSize: SIZES.smallHeading3},
  h4: {fontFamily: 'OpenSans-Bold', fontSize: SIZES.smallHeading4},
};
export const Quicksand_FONTS = {
  h1: {fontFamily: 'Quicksand-Bold', fontSize: SIZES.h1},
  h2: {fontFamily: 'Quicksand-Bold', fontSize: SIZES.h2},
  h3: {fontFamily: 'Quicksand-Bold', fontSize: SIZES.h3},
  h4: {fontFamily: 'Quicksand-Bold', fontSize: SIZES.h4},
  h5: {fontFamily: 'Quicksand-Bold', fontSize: SIZES.h5},
  h6: {fontFamily: 'Quicksand-SemiBold', fontSize: SIZES.body4},
  body3: {
    fontFamily: 'Quicksand-Medium',
    fontSize: SIZES.text5,
  },
  body4: {
    fontFamily: 'Quicksand-Light',
    fontSize: SIZES.text5,
  },
};

export const FONTS = {
  title: {fontFamily: 'OpenSans-Bold', fontSize: SIZES.title},
  h1: {fontFamily: 'OpenSans-Bold', fontSize: SIZES.h1},
  h2: {fontFamily: 'OpenSans-Bold', fontSize: SIZES.h2},
  h3: {fontFamily: 'OpenSans-Bold', fontSize: SIZES.h3},
  h4: {fontFamily: 'Quicksand-Bold', fontSize: SIZES.h4},
  h5: {fontFamily: 'OpenSans-Bold', fontSize: SIZES.h5},
  h6: {fontFamily: 'OpenSans-SemiBold', fontSize: SIZES.h6},
  body1: {fontFamily: 'OpenSans-Bold', fontSize: SIZES.body1},
  body2: {fontFamily: 'OpenSans-Bold', fontSize: SIZES.body2},
  body3: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: SIZES.body3,
  },
  body4: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: SIZES.body4,
  },
  body5: {fontFamily: 'OpenSans-Light', fontSize: SIZES.body5},
  body6: {
    fontFamily: 'OpenSans-Medium',
    fontSize: SIZES.h2,
  },
  text1: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: SIZES.text1,
  },
  text2: {
    fontFamily: 'OpenSans-Medium',
    fontSize: SIZES.text2,
  },
  text3: {
    fontFamily: 'OpenSans-Light',
    fontSize: SIZES.text3,
  },
  text4: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: SIZES.text4,
  },
  text5: {
    fontFamily: 'OpenSans-Light',
    fontSize: SIZES.text5,
  },
  text6: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: SIZES.text5,
  },
  paragraph1: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: SIZES.text5,
  },
};

export const DrawerActionBarStyle = {
  style1: {
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
    height: responsiveHeight(7),
  },
  titleStyle: {
    color: COLORS.dark,
    ...Quicksand_FONTS.h2,
    fontSize: responsiveFontSize(1.5),
  },
};

export const darkTheme = {
  backgroundColor: COLORS.darkBackground,
};

export const lightTheme = {
  backgroundColor: COLORS.white,
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;

export const SkeltonColor = '#f0f0f0';
export const SkeltonColor1 = '#f1f1f1';
export const SkeltonColor2 = '#f3f3f3';
