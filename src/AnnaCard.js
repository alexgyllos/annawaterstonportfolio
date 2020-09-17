import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Anna from "./assets/anna.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    // margin: "30px",
    // backgroundColor: "rgba(217, 217, 217, 1)",
    [theme.breakpoints.down("xs")]: {
      // margin: 10,
      marginBottom: 20,
    },
  },
  media: {
    [theme.breakpoints.up("xs")]: {
      height: 500,
    },
    width: 800,
    alignSelf: "center",
  },
  text: {
    alignSelf: "flex-end",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    color: "black",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  profileName: {
    color: "black",
  },
}));

export default function MediaCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={Anna}
        title="Anna Waterston"
      />
      <CardContent className={classes.text}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.profileName}
        >
          Anna Waterston
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </Typography>

        <Typography variant="body1" color="textSecondary" component="p">
          Illustration - Graphic Design
        </Typography>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Hello all, welcome,</Typography>
          <Typography paragraph>
            My name is Anna and I am a 2nd year Communication Design student at
            the Glasgow School of Art.
          </Typography>
          <Typography paragraph>
            After leaving school, I was unsure what I wanted to study. I spent
            two years as a literature student at Glasgow University before
            gradually deciding this was not the right path for me. Once I
            realised this I made the determined (and scary) decision to leave
            University and feed my artistic appetite.
          </Typography>
          <Typography paragraph>
            Last year I began my journey with an HNC course in Art and Design at
            Glasgow Clyde College. For me I felt this was a necessary stepping
            stone into the world of Art and Design, having been out of practice
            since Advanced Art during high school. And I was right, it gave me
            the tools I needed to finally pursue my love of playful design,
            attention to detail and well crafted ideas. Ultimately leading to my
            acceptance into the Glasgow School of Art.
          </Typography>
          <Typography paragraph>
            Currently, I have a strong passion for figure/life drawing, which
            many of my recent artworks revolve around. I attend regular drawing
            sessions hosted by All The Young Nudes, pre-pandemic these were
            always done in person, but have since moved online. This has been an
            unmistakable salvation for me during these strange and stressful
            months, providing an escape from routine and reality. Being near the
            beginning of my journey into the creative industry I have been
            inspired to set up this portfolio/information website allowing me to
            better share my work with anyone and everyone who may be interested.
          </Typography>
          <Typography>
            Thank you for taking the time to explore my artwork and feel free to
            contact me for commissions, any other enquiries, or even just to say
            Hi! At annajwaterston@gmail.com Or follow me for more regular
            updates at https://www.instagram.com/annaonart/
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
