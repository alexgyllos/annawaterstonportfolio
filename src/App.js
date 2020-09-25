import React from "react";
import "./App.css";
import { Grid, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import AnnaCard from "./AnnaCard";
import {
  // sketches,
  // digital,
  // figure,
  // curious,
  // glasgow,
  // chateau,
  alpha,
  curiousInfo,
  glasgowInfo,
  chateauInfo,
  alphaInfo,
} from "./imageImports";
import { BrowserRouter as Router } from "react-router-dom";
import ImageContainer from "./ImageContainer";

const useStyles = makeStyles((theme) => ({
  introGrid: {
    display: "flex",
    backgroundColor: "#3f5583",
  },
  contentGrid: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      margin: "10px",
    },
  },
  sectionTextStyle: {
    color: "white",
    margin: 20,
    fontSize: 30,
    padding: 20,
  },
  projectDescriptionText: {
    color: "white",
    margin: 20,
    padding: 20,
    width: "40%",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Grid
        container
        direction="column"
        className={classes.introGrid}
        id="about"
      >
        <Header />
        <Grid item container>
          <Grid item xs={false} sm={2}></Grid>
          <Grid item xs={12} sm={12} className={classes.contentGrid}>
            <Grid item sm={12} xs={12}>
              <AnnaCard />
            </Grid>

            <Grid item xs={12}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
                className={classes.sectionTextStyle}
                id="figure-drawing"
              >
                Figure Drawing
                <Divider />
              </Typography>
              {/* <ImageContainer tileData={figure} /> */}

              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
                className={classes.sectionTextStyle}
                id="sketches"
              >
                Sketches 2020
                <Divider />
              </Typography>
              {/* <ImageContainer tileData={sketches} /> */}

              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
                className={classes.sectionTextStyle}
                id="digital"
              >
                Digital
                <Divider />
              </Typography>

              {/* <ImageContainer tileData={digital} /> */}

              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
                className={classes.sectionTextStyle}
                id="projects"
              >
                Projects
                <Divider />
              </Typography>
              <ImageContainer
                // tileData={chateau}
                info={chateauInfo}
                projectTitle={"Lait De Chateau (2019)"}
              />
              <ImageContainer
                // tileData={curious}
                info={curiousInfo}
                projectTitle={"Curious Collages (2019)"}
              />
              <ImageContainer
                // tileData={glasgow}
                info={glasgowInfo}
                projectTitle={"Glasgow (2020)"}
              />

              <ImageContainer
                tileData={alpha}
                info={alphaInfo}
                projectTitle={"Άλφα (2020)"}
              />
              <br />
              <br />
            </Grid>
          </Grid>
          <Grid item xs={false} sm={2}></Grid>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
