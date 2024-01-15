import { DefaultTheme } from '@react-navigation/native'

export const theme = {
  colors: {
    primary: '#000000',
  },
}

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
}
