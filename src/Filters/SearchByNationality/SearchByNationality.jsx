import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 5,
    marginRight: 5,
  },
}));

function SearchByNationality() {
  const classes = useStyles();
  return (
    <TextField
      className={classes.root}
      id="search-by-nationality"
      placeholder="Search by nationality"
      variant="outlined"
    />
  );
}
export default SearchByNationality;
