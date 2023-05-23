import { Drawer, Box, useTheme, Avatar, Divider, List, ListItemButton,ListItemIcon, Icon, ListItemText  } from "@mui/material";
import React from "react";

interface IMenuLateralProps {
    children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
    const theme = useTheme();
    function handleListItemClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>, arg1: number): void {
        throw new Error("Function not implemented.");
    }

    return (
        <>
            <Drawer variant="permanent">
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

                    <Box width="100%" height={theme.spacing(20)} display="flex" justifyContent="center" alignItems="center">
                        {/* preferencia por theme.spacing(20) */}
                        <Avatar sx={{ height: 100, width: 149, borderRadius: 0 }}
                            src={`${process.env.PUBLIC_URL}/img/AF_marca_engemap_RGB_V_W.png`} />

                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>
                                        home
                                    </Icon>
                                </ListItemIcon>
                                <ListItemText primary="Página Inicial"/>
                            </ListItemButton>
                        </List>
                    </Box>

                </Box>
            </Drawer>
            <Box component="div" height="100vh" marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
}