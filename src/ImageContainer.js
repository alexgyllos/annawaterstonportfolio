import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import LazyLoad from "react-lazyload";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
    alignItems: "center",
    width: "100%",
  },
  gridList: {
    width: 800,
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    alignSelf: "center",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  paper: {
    position: "absolute",
    width: 460,
    [theme.breakpoints.down("xs")]: {
      width: 300,
    },
    [theme.breakpoints.only("sm")]: {
      width: 460,
    },
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    alignSelf: "center",
    outline: 0,
  },
  tileImage: {
    "&:hover": {
      cursor: "pointer",
    },
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      height: 400,
    },
    alignSelf: "center",
    objectFit: "cover",
  },
  infoStyle: {
    color: "white",
    width: "45%",
    marginBottom: 20,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  sectionTextStyle: {
    color: "white",
    margin: 20,
    fontSize: 30,
    padding: 20,
  },
}));

const ImageContainer = ({ tileData, info, projectTitle }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [tile, setTile] = React.useState("");

  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpen = (tile) => {
    setOpen(true);

    setTile(tile);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setColumns = () => {
    if (smallScreen) {
      return 1;
    } else {
      return 3;
    }
  };

  const setCellHeight = () => {
    if (smallScreen) {
      return 400;
    } else {
      return 440;
    }
  };

  const setTileColumns = (num) => {
    if (smallScreen) {
      return 1;
    } else {
      return num;
    }
  };

  return (
    <div className={classes.root}>
      {projectTitle ? (
        <Typography
          align="center"
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.sectionTextStyle}
        >
          {projectTitle}
        </Typography>
      ) : null}
      {info ? (
        <Typography align="center" className={classes.infoStyle}>
          {info}
        </Typography>
      ) : null}
      <GridList
        cellHeight={setCellHeight()}
        className={classes.gridList}
        cols={setColumns()}
      >
        {tileData
          ? tileData.map((tile) => (
              <GridListTile key={tile.img} cols={setTileColumns(tile.cols)}>
                <LazyLoad
                  // className={classes.tileImage}
                  height={setCellHeight()}
                  offset={100}
                  placeholder={
                    <Skeleton
                      className={classes.tileImage}
                      height={setCellHeight()}
                      width={"100%"}
                    />
                  }
                >
                  <img
                    title={tile.title}
                    className={classes.tileImage}
                    style={{ height: setCellHeight() }}
                    src={tile.img}
                    alt={tile.title}
                    onClick={() => handleOpen(tile)}
                  />
                </LazyLoad>
              </GridListTile>
            ))
          : null}
      </GridList>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography variant="subtitle1">{tile.title}</Typography>
            <img
              className={classes.imageStyle}
              src={tile.img}
              alt={tile.title}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ImageContainer;
