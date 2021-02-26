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

function Filters({
  nameFilter,
  updateNameFilter,
  nationalityFilter,
  updateNationalityFilter,
  genderFilter,
  updateGenderFilter,
  resetFilters,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SearchByName
        nameFilter={nameFilter}
        updateNameFilter={updateNameFilter}
      />
      <SelectByGender
        genderFilter={genderFilter}
        updateGenderFilter={updateGenderFilter}
      />
      <SearchByNationality
        nationalityFilter={nationalityFilter}
        updateNationalityFilter={updateNationalityFilter}
      />
      <Button
        variant="outlined"
        color="primary"
        size="large"
        onClick={resetFilters}
      >
        Clear
      </Button>
    </div>
  );
}
export default Filters;
