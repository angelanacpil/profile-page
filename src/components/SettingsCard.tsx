// IMPORTS
import React, { CSSProperties } from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

//APP
export default function SettingsCard(props: any) {
  //STATES - for the tabs
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  //RETURN
  return (
    <Card variant="outlined" sx={{ height: "100%", width: "100%" }}>
      {/* TABS */}
      <br></br>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab value="one" label="Account" />
        <Tab value="two" label="Privacy" />
        <Tab value="three" label="Test" />
      </Tabs>
      <Divider></Divider>

      {/* MAIN CONTENT CONTAINER */}
      <CardContent
        sx={{
          p: 3,
          mb: { xs: 0, md: 3 },
          maxHeight: { md: "40vh" },
          textAlign: { xs: "center", md: "start" }
        }}
      >
        {/* FIELDS */}
        <Grid container direction={{ xs: "column", md: "row" }} spacing={4}>
          {/* ROW 1 */}
          {/* FIRST NAME */}
          <Grid item xs={6}>
            <Typography>First Name</Typography>
            <TextField
              fullWidth
              margin="dense"
              size="small"
              id="first-name"
              label={props.firstName}
            />
          </Grid>

          {/* LAST NAME */}
          <Grid item xs={6}>
            <Typography>Last Name</Typography>
            <TextField
              fullWidth
              margin="dense"
              size="small"
              id="last-name"
              label={props.lastName}
            />
          </Grid>

          {/* ROW 2 */}
          {/* PHONE */}
          <Grid item xs={6}>
            <Typography>Phone Number</Typography>
            <TextField
              fullWidth
              margin="dense"
              size="small"
              id="phone"
              label={props.phone}
            />
          </Grid>

          {/* EMAIL */}
          <Grid item xs={6}>
            <Typography>Email Address</Typography>
            <TextField
              fullWidth
              margin="dense"
              size="small"
              id="email"
              label={props.email}
            />
          </Grid>

          {/* ROW 3 */}
          {/* CITY */}
          <Grid item xs={6}>
            <Typography>City</Typography>
            <TextField
              fullWidth
              margin="dense"
              size="small"
              id="city"
              label={props.city}
            />
          </Grid>

          {/* COUNTRY */}
          <Grid item xs={6}>
            <Typography>Country</Typography>
            <TextField
              fullWidth
              margin="dense"
              size="small"
              id="country"
              label={props.country}
            />
          </Grid>
        </Grid>
      </CardContent>

      {/* BUTTON - could've been in the grid above but the divider gets padded inside...*/}
      <Divider></Divider>
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: { xs: "center", md: "start" }
        }}
      >
        <Button size="large" variant="contained" color="secondary">
          Update
        </Button>
      </Box>
    </Card>
  );
}
