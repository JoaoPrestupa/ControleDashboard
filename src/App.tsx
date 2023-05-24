import React from "react";
import { BrowserRouter } from "react-router-dom";
import { lightTheme } from "./shared/themes/index"
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts/themeContexts";
import { MenuLateral } from "./shared/components";
import { Menu } from "@mui/icons-material";
import { DrawerProvider } from "./shared/contexts";



export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes/>
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
}