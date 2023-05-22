import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Button>Teste</Button>}/>

            {/* Caso na renderização do AppRoutes não seja encontrado nenhuma rota para o element passado na Route, vai haver um redirecionamento para essa rota do navigate to */}
            <Route path="*" element={ <Navigate to="/pagina-inicial"/> } />
        </Routes>
    );
}