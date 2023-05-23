import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppThemeContext } from '../shared/contexts';
import React from "react";

export const AppRoutes = () => {
    const {toggleTheme} = useAppThemeContext();
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={toggleTheme}>Tema da página</Button>}/>

            {/* Caso na renderização do AppRoutes não seja encontrado nenhuma rota para o element passado na Route, vai haver um redirecionamento para essa rota do navigate to */}
            <Route path="*" element={ <Navigate to="/pagina-inicial"/> } />
        </Routes>
    );
}