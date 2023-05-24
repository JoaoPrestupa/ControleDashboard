import { Drawer, Box, useTheme, Avatar, Divider, List, ListItemButton, ListItemIcon, Icon, ListItemText, useMediaQuery } from "@mui/material";
import React from "react";
import { useDrawerContext } from "../../contexts";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IMenuLateralProps {
    children: React.ReactNode;
}

interface IListItemLinkProps {
    to: string,
    label: string;
    icon: string,
    onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, label, icon, onClick }) => {

    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleClick = () => {
        navigate(to);
        if (onClick) onClick(); // ou onClick?.() pra resolver o undefined
    }

    return (
        <ListItemButton selected={!!Math} onClick={handleClick}>
            <ListItemIcon>
                <Icon>
                    {icon}
                </Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    )
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
    const theme = useTheme();

    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

    function handleListItemClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>, arg1: number): void {
        throw new Error("Function not implemented.");
    }

    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? "temporary" : "permanent"} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

                    <Box width="100%" height={theme.spacing(20)} display="flex" justifyContent="center" alignItems="center">
                        {/* preferencia por theme.spacing(20) */}
                        <Avatar sx={{ height: 100, width: 149, borderRadius: 0 }}
                            src={`${process.env.PUBLIC_URL}/img/AF_marca_engemap_RGB_V_W.png`} />

                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component="nav">
                            <ListItemLink
                                icon='home'
                                to='/pagina-inicial'
                                label='Página Inicial'
                                onClick={smDown ? toggleDrawerOpen : undefined}
                            />
                            <ListItemLink
                                icon='computer'
                                to='/pagina-inicial'
                                label='Peças'
                                onClick={smDown ? toggleDrawerOpen : undefined}
                            />
                            <ListItemLink
                                icon='call'
                                to='/pagina-inicial'
                                label='Chamados'
                                onClick={smDown ? toggleDrawerOpen : undefined}
                            />
                        </List>
                    </Box>

                </Box>
            </Drawer>
            <Box component="div" height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
}