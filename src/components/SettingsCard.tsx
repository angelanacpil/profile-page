// IMPORTS
import React, { useState, useContext } from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomInput from "./CustomInput";
import { UserMain, userData } from "../User";

//APP
export default function SettingsCard(props: any) {
  const { user, setUser } = useContext(UserMain);

  //TAB STATES
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // GENDER SELECT STATES
  const genderSelect = [
    {
      value: "male",
      label: "Male"
    },
    {
      value: "female",
      label: "Female"
    }
  ];

  // FORM STATES
  const [umi, setUmi] = useState({
    // DEFAULT VALUES

    showPassword: false
  });

  // const changeField = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setUser({ ...user, [event.target.name]: event.target.value });
  // };

  // const changeField = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setUser((prevState: any) => ({ ...prevState, email: "mrB12@pwd.com" }));
  // };

  //BUTTON STATES
  const [edit, update] = useState({
    required: true,
    disabled: true,
    isEdit: true
  });

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
        <Tab value="two" label="Tab 2" />
        <Tab value="three" label="Tab 3" />
      </Tabs>
      <Divider></Divider>

      {/* MAIN CONTENT CONTAINER */}
      <form>
        <CardContent
          sx={{
            p: 3,
            maxHeight: { md: "40vh" },
            textAlign: { xs: "center", md: "start" }
          }}
        >
          {/* FIELDS */}
          <FormControl fullWidth>
            <Grid
              container
              direction={{ xs: "column", md: "row" }}
              columnSpacing={5}
              rowSpacing={3}
            >
              {/* ROW 1: FIRST NAME */}
              <Grid component="form" item xs={6}>
                <CustomInput
                  id="firstName"
                  name="firstName"
                  value={user.firstName}
                  title="First Name"
                  onChange={() =>
                    setUser((prevState) => ({
                      ...prevState,
                      [event.target.name]: event.target.value
                    }))
                  }
                  // dis={edit.disabled}
                  // req={edit.required}
                ></CustomInput>
              </Grid>
            </Grid>
          </FormControl>
        </CardContent>
      </form>
    </Card>
  );
}
