// IMPORTS
import React, { CSSProperties } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

// STYLES
const styles = {
  details: {
    padding: "1rem",
    borderTop: "1px solid #e1e1e1"
  }
};

//APP
export default function ProfileCard(props: any) {
  return (
    <Card
      sx={{
        width: { xs: "90vw", md: "40vw" },
        height: "100%",
        zIndex: 3,
        position: "relative"
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        {/* PROFILE PHOTO */}
        <Avatar
          sx={{ width: 100, height: 100 }}
          src="https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png"
        ></Avatar>
        {/* DESCRIPTION */}
        <CardContent>
          <Typography variant="h6">{props.name}</Typography>
          <Typography color="text.secondary">{props.sub}</Typography>
        </CardContent>
      </Grid>

      {/* DETAILS */}
      <Typography style={styles.details}>Detail 1</Typography>
      <Typography style={styles.details}>Detail 2</Typography>
      <Typography
        style={styles.details}
        sx={{ borderBottom: "1px solid #e1e1e1" }}
      >
        Detail 3
      </Typography>

      {/* BUTTON */}
      <Button variant="outlined">Outlined</Button>
    </Card>
  );
}
