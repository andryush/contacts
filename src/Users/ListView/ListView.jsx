import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import ListViewItem from "./ListViewItem/ListViewItem";

const useStyles = makeStyles({
  root: {
    marginTop: 5,
  },
  table: {
    minWidth: 650,
  },
});

const StyledTableCell = withStyles(() => ({
  head: {
    fontWeight: 900,
  },
}))(TableCell);

function ListView({ splitted, page }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Avatar</StyledTableCell>
            <StyledTableCell align="left">Full name</StyledTableCell>
            <StyledTableCell align="left">Birthday</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Phone</StyledTableCell>
            <StyledTableCell align="left">Location</StyledTableCell>
            <StyledTableCell align="right">Nationality</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {splitted.length > 0
            ? splitted[page - 1].map(
                ({
                  name,
                  dob,
                  email,
                  phone,
                  location,
                  country,
                  nat,
                  gender,
                  login,
                  picture,
                }) => {
                  return (
                    <ListViewItem
                      key={login.uuid}
                      name={name}
                      dob={dob}
                      email={email}
                      phone={phone}
                      location={location}
                      country={country}
                      nat={nat}
                      gender={gender}
                      uuid={login.uuid}
                      picture={picture.large}
                    />
                  );
                }
              )
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default ListView;
