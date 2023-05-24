
import React, { createContext, useCallback, useContext, useState } from "react";

interface IdrawerContextData {
    isDrawerOpen: boolean // vai aceitar esses dois
    toggleDrawerOpen: () => void; // trocar o tema
}

interface IDrawerOption {
    icon: string,
    path: string,
    label: string;
}

const drawerContext = createContext({} as IdrawerContextData);

export const useDrawerContext = () => {
    return useContext(drawerContext);
};

interface IDrawerProviderProps {
    children: React.ReactNode
}


export const DrawerProvider: React.FC<IDrawerProviderProps> = ({ children }) => {
    const [isDrawerOpen, setisDrawerOpen] = useState(false);

    const toggleDrawerOpen = useCallback(() => {
        setisDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    return (
        <drawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
            {children}
        </drawerContext.Provider>
    );
}

function useCallBack(arg0: () => void, arg1: never[]) {
    throw new Error("Function not implemented.");
}
