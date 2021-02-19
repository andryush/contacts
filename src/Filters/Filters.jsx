import React from "react";
import SearchByName from "./SearchByName/SearchByName";
import SelectByGender from "./SelectByGender/SelectByGender";
import SearchByNationality from "./SearchByNationality/SearchByNationality";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 10,
    display: "flex",
    justifyContent: "space-between",
  },
}));

function Filters() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SearchByName />
      <SelectByGender />
      <SearchByNationality />
      <Button variant="outlined" color="primary" size="large">
        Clear
      </Button>
    </div>
  );
}
export default Filters;
