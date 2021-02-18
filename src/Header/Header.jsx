import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

import ResetViewIcon from "./ViewIcons/ResetViewIcon/ResetViewIcon";
import ListViewIcon from "./ViewIcons/ListViewIcon/ListViewIcon";
import CardViewIcon from "./ViewIcons/CardViewIcon/CardViewIcon";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  toggleButton: {
    color: "white",
  },
}));

function Header({ viewType, changeViewType }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Contacts App
          </Typography>
          <Button value="left" color="inherit">
            <ResetViewIcon />
          </Button>
          <ToggleButtonGroup
            value={viewType}
            exclusive
            onChange={changeViewType}
          >
            <ToggleButton value="cardView" className={classes.toggleButton}>
              <CardViewIcon />
            </ToggleButton>
            <ToggleButton value="listView" className={classes.toggleButton}>
              <ListViewIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;
