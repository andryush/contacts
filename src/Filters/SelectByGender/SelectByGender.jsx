import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 2,
    marginRight: 5,
  },
}));

function SelectByGender() {
  const [age, setAge] = useState("");
  const classes = useStyles();
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <TextField
      className={classes.root}
      id="standard-select-currency"
      select
      value="gender"
      onChange={handleChange}
      variant="outlined"
    >
      <MenuItem value="gender">Gender</MenuItem>
      <MenuItem value={10}>Male</MenuItem>
      <MenuItem value={20}>Female</MenuItem>
      <MenuItem value={30}>Indeterminate</MenuItem>
    </TextField>
  );
}
export default SelectByGender;
