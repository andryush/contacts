import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 2,
    marginRight: 5,
  },
}));

function SelectByGender({ genderFilter, updateGenderFilter }) {
  const classes = useStyles();

  return (
    <TextField
      className={classes.root}
      id="standard-select-gender"
      select
      value={!genderFilter ? "gender" : genderFilter}
      onChange={updateGenderFilter}
      variant="outlined"
    >
      <MenuItem value="gender" disabled>
        Gender
      </MenuItem>
      <MenuItem value="">None</MenuItem>
      <MenuItem value="male">Male</MenuItem>
      <MenuItem value="female">Female</MenuItem>
      <MenuItem value="indeterminate">Indeterminate</MenuItem>
    </TextField>
  );
}
export default SelectByGender;
