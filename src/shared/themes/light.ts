import { createTheme } from "@mui/material";
import { blue, cyan, purple, yellow } from "@mui/material/colors";


export const lightTheme = createTheme({
    palette: {
        primary:{
            main: purple[700],
            dark: blue[800],
            light: blue[500],
            contrastText: '#fffff',
        },
        secondary:{
            main: yellow[500],
            dark: yellow[600],
            light: yellow[200],
            contrastText: '#00000'
        },
        background:{
            default: '#f7f6f3',
            paper: cyan[100],
        }
    }
});