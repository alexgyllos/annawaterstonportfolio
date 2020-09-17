import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    // backgroundColor: "#0a0a0a",
    backgroundColor: "rgba(0,0,0,0)",
    alignItems: "center",
    width: "100%",
  },
  gridList: {
    width: 800,
    height: 700,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      //   height: 100,
    },
    alignSelf: "center",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
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
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: 400,
    },
    alignSelf: "center",
    objectFit: "cover",
  },
}));

const ImageContainer = ({ tileData }) => {
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
      <GridList
        cellHeight={setCellHeight()}
        className={classes.gridList}
        cols={setColumns()}
      >
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={setTileColumns(tile.cols)}>
            <img
              className={classes.tileImage}
              src={tile.img}
              alt={tile.title}
              onClick={() => handleOpen(tile)}
            />
          </GridListTile>
        ))}
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
