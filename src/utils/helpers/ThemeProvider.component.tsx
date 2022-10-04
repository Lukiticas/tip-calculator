import { DefaultTheme, ThemeProvider } from "styled-components";
import { createContext } from "react";
import usePersistedState from "../UsePersistedState.util";

import { GlobalStyle } from "../../styles/global.styles";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";

export interface ThemeClientInterface {
  children: JSX.Element;
}

export interface ThemeContextInterface {
  theme: DefaultTheme | null;
  setTheme: () => void;
}

const ThemeContext = createContext<ThemeContextInterface>({
  theme: null,
  setTheme: () => null,
});

const ThemeClient = ({ children }: ThemeClientInterface) => {
  const [theme, setTheme] = usePersistedState("tipTheme", dark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
export default ThemeClient;
