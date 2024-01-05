import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    primary: {
      '50': '#ffcfc6',
      '100': '#ffb9ad',
      '200': '#ffa393',
      '300': '#ff8e7a',
      '400': '#ff7861',
      '500': '#ff6347',
      '600': '#fb593c',
      '700': '#f74f32',
      '800': '#f24628',
      '900': '#ec3d1e',
    },
    title: {
      '50': '#6f5252',
      '100': '#5d4a4a',
      '200': '#4d4242',
      '300': '#3d3838',
      '400': '#2e2e2e',
      '500': '#212121',
      '600': '#191b1b',
      '700': '#111414',
      '800': '#090c0c',
      '900': '#030404',
    },
    subTitle: {
      '50': '#af9292',
      '100': '#a08787',
      '200': '#907e7e',
      '300': '#7f7676',
      '400': '#6e6e6e',
      '500': '#616161',
      '600': '#565d5d',
      '700': '#4c5858',
      '800': '#425353',
      '900': '#394d4d',
    },
    gray: {
      '50': '#e3d8d8',
      '100': '#d6cbcb',
      '200': '#c9c0c0',
      '300': '#bab5b5',
      '400': '#ababab',
      '500': '#9e9e9e',
      '600': '#939b9b',
      '700': '#879898',
      '800': '#7a9595',
      '900': '#6d9494',
    },
    background: {
      '500': '#ffffff',
    },
  },
  fontConfig: {
    Urbanist: {
      100: {
        normal: 'Urbanist_100Thin',
        italic: 'Urbanist_100Thin_Italic',
      },
      200: {
        normal: 'Urbanist_200ExtraLight',
        italic: 'Urbanist_200ExtraLight_Italic',
      },
      300: {
        normal: 'Urbanist_300Light',
        italic: 'Urbanist_300Light_Italic',
      },
      400: {
        normal: 'Urbanist_400Regular',
        italic: 'Urbanist_400Regular_Italic',
      },
      500: {
        normal: 'Urbanist_500Medium',
        italic: 'Urbanist_500Medium_Italic',
      },
      600: {
        normal: 'Urbanist_600SemiBold',
        italic: 'Urbanist_600SemiBold_Italic',
      },
      700: {
        normal: 'Urbanist_700Bold',
        italic: 'Urbanist_700Bold_Italic',
      },
      800: {
        normal: 'Urbanist_800ExtraBold',
        italic: 'Urbanist_800ExtraBold_Italic',
      },
      900: {
        normal: 'Urbanist_900Black',
        italic: 'Urbanist_900Black_Italic',
      },
    },
  },
  fonts: {
    heading: 'Urbanist',
    body: 'Urbanist',
    mono: 'Urbanist',
  },
  components: {
    Button: {
      defaultProps: {
        _text: {
          fontWeight: 700,
          fontSize: '16px',
        },
        h: '65px',
        borderRadius: '65px',
      },
    },
    Heading: {
      defaultProps: {
        fontWeight: 700,
        color: 'title.500',
        fontSize: '32px',
      },
    },
    Text: {
      defaultProps: {
        fontWeight: 400,
        color: 'subTitle.500',
        fontSize: '18px',
      },
    },
    IconButton: {
      defaultProps: {
        _pressed: {
          bg: 'transparent',
        },
      },
    },
  },
});
