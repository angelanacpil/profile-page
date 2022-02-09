// IMPORTS
import React, { CSSProperties } from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// STYLES
const styles = {
  field: {
    width: { xs: "80vw", md: "30vw" }
  },
  btn: {
    margin: { xs: "1rem 5rem", md: "1rem auto 0" },
    fontWeight: "bold"
  }
};

//APP
export default function SettingsCard(props: any) {
  //STATES - for the tabs
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <Container sx={{ p: 2, width: "100%" }}>
        {/* TABS */}
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab value="one" label="Account" />
          <Tab value="two" label="Privacy" />
        </Tabs>

        {/* FIELDS */}
        <Grid
          container
          direction={{ xs: "column" }}
          alignItems={{ xs: "center", md: "start" }}
          spacing={2}
          sx={{ maxHeight: { md: "40vh" }, mt: 2, mb: 6 }}
        >
          {/* COLUMN 1 */}
          {/* FIRST NAME */}
          <Grid item sx={{ fontWeight: "bold" }}>
            First Name
          </Grid>
          <Grid item>
            <TextField
              sx={{ ...styles.field }}
              size="small"
              id="first-name"
              label={props.firstName}
            />
          </Grid>

          {/* PHONE */}
          <Grid item sx={{ fontWeight: "bold" }}>
            Phone Number
          </Grid>
          <Grid item>
            <TextField
              sx={{ ...styles.field }}
              size="small"
              id="phone"
              label={props.phone}
            />
          </Grid>

          {/* CITY */}
          <Grid item sx={{ fontWeight: "bold" }}>
            City
          </Grid>
          <Grid item>
            <TextField
              sx={{ ...styles.field }}
              size="small"
              id="city"
              label={props.city}
            />
          </Grid>

          {/* COLUMN 2*/}
          {/* LAST NAME */}
          <Grid item sx={{ fontWeight: "bold" }}>
            Last Name
          </Grid>
          <Grid item>
            <TextField
              sx={{ ...styles.field }}
              size="small"
              id="last-name"
              label={props.lastName}
            />
          </Grid>

          {/* EMAIL */}
          <Grid item sx={{ fontWeight: "bold" }}>
            Email Address
          </Grid>
          <Grid item>
            <TextField
              sx={{ ...styles.field }}
              size="small"
              id="email"
              label={props.email}
            />
          </Grid>

          {/* COUNTRY */}
          <Grid item sx={{ fontWeight: "bold" }}>
            Country
          </Grid>
          <Grid item>
            <TextField
              sx={{ ...styles.field }}
              size="small"
              id="country"
              label={props.country}
            />
          </Grid>
        </Grid>

        {/* BUTTON */}
        <Divider></Divider>
        <Button
          sx={{ ...styles.btn }}
          size="large"
          variant="contained"
          color="secondary"
        >
          Update
        </Button>
      </Container>
    </Card>
  );
}
