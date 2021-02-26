import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 5,
    marginRight: 5,
  },
}));
function SearchByName({ nameFilter, updateNameFilter }) {
  const classes = useStyles();

  return (
    <TextField
      className={classes.root}
      id="search-by-full-name"
      placeholder="Search by full name"
      variant="outlined"
      value={nameFilter}
      onChange={updateNameFilter}
    />
  );
}
export default SearchByName;
