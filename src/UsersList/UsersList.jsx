import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import UserListItem from "./UsersListItem/UsersListItem";

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

function UsersList() {
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Avatar</StyledTableCell>
            <StyledTableCell align="left">Full name</StyledTableCell>
            <StyledTableCell align="left">Birthday</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Phone</StyledTableCell>
            <StyledTableCell align="left">Location</StyledTableCell>
            <StyledTableCell align="right">Nationality</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(
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
                <UserListItem
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
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default UsersList;
