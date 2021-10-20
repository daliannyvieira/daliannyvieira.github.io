import React, { useState, useEffect } from 'react';

import {
  COLORS,
  COLOR_MODE_KEY,
} from '../constants';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState(undefined);

  const contextValue = React.useMemo(() => {
    function setColorMode(newValue) {
      const root = window.document.documentElement;
  
      localStorage.setItem(COLOR_MODE_KEY, newValue);
  
      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;
  
        root.style.setProperty(cssVarName, colorByTheme[newValue]);
      });
  
      rawSetColorMode(newValue);
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);


  useEffect(() => {
    const savedTheme = localStorage.getItem(COLOR_MODE_KEY)

    if (savedTheme) {
      contextValue.setColorMode(savedTheme)
    }
  }, []);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};