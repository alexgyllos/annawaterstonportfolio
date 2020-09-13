import React from "react";
import "./App.css";
import { Grid, Divider, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Header from "./Header";
import AnnaCard from "./AnnaCard";
import Alex from "./assets/2020 Sketching/17:04:20.JPG";
import Audrey from "./assets/2020 Sketching/Audrey.JPG";
import GreekCoffee from "./assets/2020 Sketching/Greek Coffee.jpg";
import Journey from "./assets/2020 Sketching/Journey.jpg";
import Journey2 from "./assets/2020 Sketching/Journey 2.jpg";
import Kitchen from "./assets/2020 Sketching/Kitchen.jpg";
import LivingRoom from "./assets/2020 Sketching/Living Rom.jpg";
import Napkin from "./assets/2020 Sketching/Napkin.jpg";
import Red from "./assets/2020 Sketching/Red.jpg";
import Red2 from "./assets/2020 Sketching/Red 2.jpg";
import Routine from "./assets/2020 Sketching/Routine.JPG";
import SelfPortrait from "./assets/2020 Sketching/Self Portrait.jpg";
import Untitled1 from "./assets/2020 Sketching/Untitled 1.jpg";
import Untitled2 from "./assets/2020 Sketching/Untitled 2.jpg";
import Sun from "./assets/2020 Sketching/Ηλιος.jpg";
import Orange from "./assets/2020 Sketching/Πορτοκαλι.jpg";
import Oropos from "./assets/2020 Sketching/Ωρωποσ.jpg";

import ImageContainer from "./ImageContainer";

const useStyles = makeStyles((theme) => ({
  introGrid: {
    display: "flex",
  },
  contentGrid: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const sketches = [
  {
    img: Alex,
    title: "17/04/20",
    author: "Anna Waterston",
    cols: 3,
  },
  {
    img: Audrey,
    title: "Audrey",
    author: "Anna Waterston",
    cols: 1,
  },
  {
    img: GreekCoffee,
    title: "Greek Coffee",
    author: "Anna Waterston",
    cols: 2,
  },
  {
    img: Journey,
    title: "Journey",
    author: "Anna Waterston",
    cols: 2,
  },
  {
    img: Journey2,
    title: "Journey 2",
    author: "Anna Waterston",
    cols: 1,
  },
  {
    img: Kitchen,
    title: "Kitchen",
    author: "Anna Waterston",
    cols: 3,
  },
  {
    img: LivingRoom,
    title: "Living Room",
    author: "Anna Waterston",
    cols: 3,
  },
  {
    img: Napkin,
    title: "Napkin",
    author: "Anna Waterston",
    cols: 3,
  },
  {
    img: Red,
    title: "Red",
    author: "Anna Waterston",
    cols: 1,
  },
  {
    img: Red2,
    title: "Red 2",
    author: "Anna Waterston",
    cols: 1,
  },
  {
    img: SelfPortrait,
    title: "Self Portrait",
    author: "Anna Waterston",
    cols: 1,
  },
  {
    img: Routine,
    title: "Routine",
    author: "Anna Waterston",
    cols: 3,
  },

  {
    img: Untitled1,
    title: "Untitled 1",
    author: "Anna Waterston",
    cols: 1,
  },
  {
    img: Untitled2,
    title: "Untitled 2",
    author: "Anna Waterston",
    cols: 1,
  },
  {
    img: Sun,
    title: "Ηλιος",
    author: "Anna Waterston",
    cols: 1,
  },
  {
    img: Orange,
    title: "Πορτοκαλι",
    author: "Anna Waterston",
    cols: 2,
  },
  {
    img: Oropos,
    title: "Ωρωπος",
    author: "Anna Waterston",
    cols: 1,
  },
];

function App() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container direction="column" className={classes.introGrid}>
      <Header />
      <Grid item container>
        <Grid item xs={false} sm={2}></Grid>
        <Grid item xs={12} sm={12} className={classes.contentGrid}>
          <Grid item sm={12} xs={12}>
            <AnnaCard />
          </Grid>

          <Grid item xs={12}>
            <Typography gutterBottom variant="h5" component="h2">
              Figure Drawing
              <Divider />
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              Digital
            </Typography>
            <Divider />

            <Typography gutterBottom variant="h5" component="h2">
              Projects
            </Typography>
            <Divider />

            <Typography gutterBottom variant="h5" component="h2">
              Sketches 2020
              <ImageContainer tileData={sketches} />
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2}></Grid>
      </Grid>
    </Grid>
  );
}

export default App;
