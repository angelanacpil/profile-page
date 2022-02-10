// IMPORTS
import React, { useState } from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomInput from "./CustomInput";

//APP
export default function SettingsCard(props: any) {
  //TAB STATES
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // FORM STATES
  const [user, setUser] = useState({
    // DEFAULT VALUES
    firstName: "Your First Name",
    lastName: "Your Last Name",
    midName: "Your Middle Name",
    sex: "Your Gender",
    phone: "Your Phone Number",
    email: "Your Email Address",
    pass: "Your Password"
  });

  const changeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  //BUTTON STATES
  const [edit, update] = useState({
    required: true,
    disabled: true,
    isEdit: true
  });

  const changeButton = (event: any) => {
    event.preventDefault();
    edit.disabled = !edit.disabled;
    edit.isEdit = !edit.isEdit;
    update({ ...edit });
    console.log("user: ", user);
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
      <form>
        <CardContent
          sx={{
            p: 3,
            // mb: { xs: 0, md: 3 },
            maxHeight: { md: "40vh" },
            textAlign: { xs: "center", md: "start" }
          }}
        >
          {/* FIELDS */}
          <Grid
            container
            direction={{ xs: "column", md: "row" }}
            columnSpacing={5}
            rowSpacing={3}
          >
            {/* ROW 1: FIRST NAME */}
            <Grid item xs={6}>
              <CustomInput
                id="firstName"
                name="firstName"
                value={user.firstName}
                onChange={changeField}
                title="First Name"
                dis={edit.disabled}
                req={edit.required}
              ></CustomInput>
            </Grid>

            {/* ROW 1: LAST NAME */}
            <Grid component="form" item xs={6}>
              <CustomInput
                id="lastName"
                name="lastName"
                value={user.lastName}
                onChange={changeField}
                title="Last Name"
                dis={edit.disabled}
                req={edit.required}
              ></CustomInput>
            </Grid>

            {/* ROW 2: MIDDLE NAME */}
            <Grid item xs={6}>
              <CustomInput
                id="midName"
                name="midName"
                value={user.midName}
                onChange={changeField}
                title="Middle Name"
                dis={edit.disabled}
                req={edit.required}
              ></CustomInput>
            </Grid>

            {/* ROW 2: GENDER */}
            <Grid item xs={6}>
              <CustomInput
                id="sex"
                name="sex"
                value={user.sex}
                onChange={changeField}
                title="Gender"
                dis={edit.disabled}
                req={edit.required}
              ></CustomInput>
            </Grid>

            {/* ROW 3: PHONE */}
            <Grid item xs={6}>
              <CustomInput
                id="phone"
                name="phone"
                value={user.phone}
                onChange={changeField}
                title="Phone Number"
                dis={edit.disabled}
                req={edit.required}
                type="number"
              ></CustomInput>
            </Grid>

            {/* ROW 3: EMAIL */}
            <Grid item xs={6}>
              <CustomInput
                id="email"
                name="email"
                value={user.email}
                onChange={changeField}
                title="Email Address"
                dis={edit.disabled}
                req={edit.required}
              ></CustomInput>
            </Grid>

            {/* ROW 4: PASSWORD */}
            <Grid item xs={6}>
              <CustomInput
                id="pass"
                name="pass"
                value={user.pass}
                onChange={changeField}
                title="Password"
                dis={edit.disabled}
                req={edit.required}
                type="password"
              ></CustomInput>
            </Grid>

            {/* BUTTON */}
            <Grid container justifyContent="flex-end" item xs={6}>
              <Button
                sx={{ p: "1rem 2rem", my: 2, height: "3rem" }}
                component="button"
                size="large"
                variant="contained"
                color="secondary"
                onClick={changeButton}
              >
                {edit.isEdit === false ? "UPDATE" : "EDIT"}
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
}
