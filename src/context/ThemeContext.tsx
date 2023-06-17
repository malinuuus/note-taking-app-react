import { FC, ReactNode, createContext, useEffect, useState } from "react"

type ThemeType = 'dark' | 'light';

type Theme = {
  background: string,
  inputBackground: string
  elements: string
  onHover: string
  fontColor: string,
  disabledFont: string,
  red: string,
  redOnHover: string,
  boxShadow: string
}

const themes: Record<ThemeType, Theme> = {
  light: {
    background: '#fff',
    inputBackground: '#eaeaea',
    elements: '#fff',
    onHover: '#eaeaea',
    fontColor: '#000',
    disabledFont: '#dbdbdb',
    red: '#ff9f9f',
    redOnHover: '#ff8484',
    boxShadow: '8px 8px 29px -11px rgba(66, 68, 90, 1)'
  },
  dark: {
    background: '#292929',
    inputBackground: '#353539',
    elements: '#353539',
    onHover: '#4f4f4f',
    fontColor: '#fff',
    disabledFont: '#616161',
    red: '#ff4040',
    redOnHover: '#c72c2c',
    boxShadow: 'none'
  }
}

type ThemeContextType = {
  themeType: ThemeType,
  theme: Theme
  setTheme?: (themeType: ThemeType) => void
};

export const ThemeContext = createContext<ThemeContextType>({ 
  themeType: 'light',
  theme: themes['light']
 });

type ThemeProviderProps = {
  children?: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [themeType, setThemeType] = useState<ThemeType>('dark');

  const setBodyTheme = (theme: ThemeType = themeType) => {
    const { background, fontColor } = themes[theme];
    document.body.style.backgroundColor = background;
    document.body.style.color = fontColor;
  }

  const setTheme = (theme: ThemeType) => {
    setBodyTheme(theme);
    setThemeType(theme);
  };

  useEffect(() => setBodyTheme(), []);

  return (
    <ThemeContext.Provider
      value={{
        themeType,
        theme: themes[themeType],
        setTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}