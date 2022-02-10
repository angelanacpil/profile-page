// IMPORTS
import "./styles.css";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProfileCard from "./components/ProfileCard";
import SettingsCard from "./components/SettingsCard";

// FONTS
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// STYLE & THEME
const theme = createTheme();

// APP
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {/* BACKGROUND */}
        <Grid container direction="column" sx={{ overflowX: "hidden" }}>
          <Grid item xs={12} md={6}>
            <img
              alt="avatar"
              style={{
                width: "100vw",
                height: "35vh",
                objectFit: "cover",
                objectPosition: "50% 50%",
                position: "relative"
              }}
              src="https://iris2.gettimely.com/images/default-cover-image.jpg"
            />
          </Grid>

          {/* COMPONENTS */}
          <Grid
            container
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            sx={{
              position: "absolute",
              top: "20vh",
              px: { xs: 0, md: 7 }
            }}
          >
            {/* PROFILE CARD */}
            <Grid item md={3}>
              <ProfileCard
                name="Jane Doe"
                sub="CEO of Apple"
                dt1="32"
                dt2="42"
                dt3="100"
              ></ProfileCard>
            </Grid>

            {/* SETTINGS CARD */}
            <Grid item md={9}>
              <SettingsCard></SettingsCard>
            </Grid>
          </Grid>
        </Grid>
      </CssBaseline>
    </ThemeProvider>
  );
}
