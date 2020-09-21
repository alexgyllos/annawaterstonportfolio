import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import InstagramIcon from "@material-ui/icons/Instagram";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import Tooltip from "@material-ui/core/Tooltip";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: "black",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    backgroundColor: "#3f5583",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  headerTitle: {
    marginRight: "auto",
    color: "black",
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
  socialButton: {
    color: "black",
    margin: "auto",
    [theme.breakpoints.down("xl")]: {
      fontSize: 30,
    },
  },
  socialLink: {
    marginLeft: "auto",
    color: "black",
    textDecoration: "inherit",
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [nestedListOpen, setNestedListOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setNestedListOpen(!nestedListOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{ backgroundColor: "white" }}>
          <IconButton
            // color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.headerTitle} variant="h6" noWrap>
            Menu
          </Typography>

          <a
            href="mailto:annajwaterston@gmail.com"
            classname={classes.socialLink}
          >
            <Tooltip title="annajwaterston@gmail.com" arrow>
              <AlternateEmailIcon
                className={classes.socialButton}
                fontSize="large"
                style={{ marginRight: theme.spacing(2) }}
              />
            </Tooltip>
          </a>
          <a
            href="https://www.instagram.com/annaonart/"
            classname={classes.socialLink}
          >
            <Tooltip title="@annaonart" arrow>
              <InstagramIcon
                className={classes.socialButton}
                fontSize="large"
              />
            </Tooltip>
          </a>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              // <ChevronLeftIcon />
              <Typography style={{ color: "white" }}>Exit</Typography>
            ) : (
              // <ChevronRightIcon />
              <Typography style={{ color: "white" }}>Exit</Typography>
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["About Me"].map((text, index) => (
            <Link smooth to="#about" className={classes.link}>
              <ListItem button key={index}>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Portfolio" style={{ color: "black" }} />
            {nestedListOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={nestedListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link smooth to="#figure-drawing" className={classes.link}>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Figure Drawing" />
                </ListItem>
              </Link>
            </List>
          </Collapse>
          <Collapse in={nestedListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link smooth to="#sketches" className={classes.link}>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Sketches 2020" />
                </ListItem>
              </Link>
            </List>
          </Collapse>
          <Collapse in={nestedListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link smooth to="#digital" className={classes.link}>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Digital" />
                </ListItem>
              </Link>
            </List>
          </Collapse>

          <Collapse in={nestedListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link smooth to="#projects" className={classes.link}>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Projects" />
                </ListItem>
              </Link>
            </List>
          </Collapse>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}
