
import { Box, ThemeProvider } from '@mui/material'
import { darkTheme, lightTheme } from "../themes";
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";



interface IThemeContextData {
    themeName: 'light' | 'dark' // vai aceitar esses dois
    toggleTheme: () => void; // trocar o tema
}

const themeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(themeContext);
}

interface IThemeProviderProps {
    children: React.ReactNode
}

export const AppThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');
    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
      }, []);
      

    const theme = useMemo(() =>{
        if (themeName == 'light') return lightTheme;
    // else
        return darkTheme;
    }, [themeName]);

    return (
        <themeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={darkTheme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                {children}
                </Box>
            </ThemeProvider>
        </themeContext.Provider>
    );
}

function useCallBack(arg0: () => void, arg1: never[]) {
    throw new Error("Function not implemented.");
}
