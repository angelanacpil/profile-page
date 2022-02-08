// IMPORTS
import "./styles.css";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// FONTS
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// PRIMARY PALETTE
// main: '#E91E63'
// light: '#ff558f'
// dark: '#AC1C4D'

// SECONDARY PALETTE
// main: '#899499'
// light: '#D3D3D3'
// dark: '#818589'

// STYLE & THEME
const theme = createTheme();

// APP
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline>
          {/* LAYOUT */}
          <Box
            sx={{
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" sx={{ mt: 3 }}></Box>
          </Box>
        </CssBaseline>
      </Container>
    </ThemeProvider>
  );
}
