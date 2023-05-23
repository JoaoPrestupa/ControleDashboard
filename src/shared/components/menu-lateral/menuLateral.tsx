import { Drawer, Box, useTheme, Avatar } from "@mui/material";
import React from "react";

interface IMenuLateralProps{
    children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
    const theme = useTheme();
    return(
        <>
            <Drawer variant="permanent">
                <Box width={theme.spacing(28)}>  
                <Avatar alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/img/engemap.png`} />
                </Box>
            </Drawer>
            <Box component="div" height="100vh" marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
}