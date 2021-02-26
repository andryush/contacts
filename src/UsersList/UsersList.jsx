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

import { findNationality } from "../helpers/helpers";
import { countriesList } from "../helpers/countriesList";

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

function UsersList({
  page,
  updateMaxPageCount,
  nameFilter,
  nationalityFilter,
  genderFilter,
}) {
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  const getData = async () => {
    const data = await fetch(
      "https://randomuser.me/api/?results=100"
    ).then((response) => response.json());
    setUsers(data.results);
  };

  const splitToArrays = (data, size) => {
    const result = [];
    for (let i = 0; i < data.length; i += size) {
      result.push(data.slice(i, i + size));
    }
    return result;
  };

  let splitted = splitToArrays(users, 10);

  if (nameFilter.length > 0) {
    const filtered = users.filter((el) => {
      return (
        el.name.first.toLowerCase().includes(nameFilter.toLowerCase()) ||
        el.name.last.toLowerCase().includes(nameFilter.toLowerCase())
      );
    });
    splitted = splitToArrays(filtered, 10);
  }

  if (nationalityFilter.length > 0) {
    const filtered = users.filter((el) => {
      return findNationality(el.nat, countriesList)
        .toLowerCase()
        .includes(nationalityFilter.toLowerCase());
    });
    splitted = splitToArrays(filtered, 10);
  }

  if (genderFilter.length > 0) {
    const filtered = users.filter((el) => {
      return el.gender.toLowerCase() === genderFilter.toLowerCase();
    });
    splitted = splitToArrays(filtered, 10);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    updateMaxPageCount(splitted.length);
  }, [updateMaxPageCount, splitted]);

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
              )
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default UsersList;
