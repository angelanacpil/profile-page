// IMPORTS
import React, { CSSProperties } from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

// STYLES
const styles = {
  label: {
    fontWeight: "bold",
    marginBottom: ".5rem"
  },
  field: {
    maxWidth: "50vh",
    marginBottom: "2rem"
  }
};

//APP
export default function SettingsCard(props: any) {
  //STATES - for the tabs
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  //RETURN
  return (
    <Card variant="outlined" sx={{ height: "100%", p: 2 }}>
      <Container>
        {/* TABS */}
        <Tabs
          sx={{ mb: 3 }}
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab value="one" label="Account" />
          <Tab value="two" label="Privacy" />
        </Tabs>

        {/* CONTENT */}
        <Grid container direction={{ xs: "column", md: "row" }}>
          {/* COLUMN 1*/}
          <Grid container direction="column">
            {/* FIRST NAME */}
            <Grid item style={styles.label}>
              First Name
            </Grid>
            <TextField
              id="first-name"
              label={props.firstName}
              variant="outlined"
              style={styles.field}
            />

            {/* PHONE */}
            <Grid item style={styles.label}>
              Phone
            </Grid>
            <TextField
              id="phone"
              label={props.phone}
              variant="outlined"
              style={styles.field}
            />

            {/* CITY */}
            <Grid item style={styles.label}>
              City
            </Grid>
            <TextField
              id="city"
              label={props.city}
              variant="outlined"
              style={styles.field}
            />
          </Grid>

          {/* COLUMN 2*/}
        </Grid>
      </Container>
    </Card>
  );
}
