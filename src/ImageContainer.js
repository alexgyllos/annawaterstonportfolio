import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

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
    backgroundColor: "#faf7ed",
    alignItems: "center",
  },
  gridList: {
    width: 800,
    height: 700,
    // [theme.breakpoints.up("xs")]: {
    //   width: "100%",
    //   height: "10%",
    // },
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.up("xs")]: {
      //   width: "10%",
      //   height: "10%",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  paper: {
    position: "absolute",
    width: 600,
    [theme.breakpoints.down("xs")]: {
      width: 350,
    },
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    alignSelf: "center",
    outline: 0,
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const ImageContainer = ({ tileData }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [tile, setTile] = React.useState("");

  const handleOpen = (tile) => {
    setOpen(true);

    setTile(tile);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={440} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img
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
