import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";

function UsersListItem({
  name,
  dob,
  email,
  phone,
  location,
  country,
  nat,
  gender,
  picture,
}) {
  return (
    <TableRow>
      <TableCell align="left">
        <Avatar alt={`${name.title} ${name.first}`} src={picture} />
      </TableCell>
      <TableCell align="left">{`${name.title} ${name.first} ${name.last}`}</TableCell>
      <TableCell align="left">{`${dob.date} ${dob.age} years`}</TableCell>
      <TableCell align="left">{email}</TableCell>
      <TableCell align="left">{phone}</TableCell>
      <TableCell align="left">{country}</TableCell>
      <TableCell align="left">{nat}</TableCell>
    </TableRow>
  );
}
export default UsersListItem;
