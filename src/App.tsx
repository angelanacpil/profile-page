// IMPORTS
import "./styles.css";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import ProfileCard from "./components/ProfileCard";

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
      <CssBaseline>
        {/* BACKGROUND */}
        <Card
          sx={{
            zIndex: 1,
            maxWidth: "100vw",
            height: "100vh",
            position: "relative"
          }}
        >
          <CardMedia
            component="img"
            alt="cover photo"
            height="250vh"
            image="https://iris2.gettimely.com/images/default-cover-image.jpg"
          ></CardMedia>

          {/* INSIDE COMPONENTS */}
          <CardContent>
            <Grid container spacing={3}>
              {/* PROFILE CARD */}
              <Grid item>
                <ProfileCard name="Jane Doe" sub="CEO of Apple"></ProfileCard>
              </Grid>

              {/* ACCOUNT SETTINGS */}
            </Grid>
          </CardContent>
        </Card>
      </CssBaseline>
    </ThemeProvider>
  );
}
