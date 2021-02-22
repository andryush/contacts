import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

import { dateConverter, findNationality } from "../../helpers/helpers";
import { countriesList } from "../../helpers/countriesList";

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
  const date = dateConverter(dob.date);
  const nationality = findNationality(nat, countriesList);
  return (
    <TableRow>
      <TableCell align="left">
        <Avatar alt={`${name.title} ${name.first}`} src={picture} />
      </TableCell>
      <TableCell align="left">{`${name.title} ${name.first} ${name.last}`}</TableCell>
      <TableCell align="left">{`${date} ${dob.age} years`}</TableCell>
      <TableCell align="left">{email}</TableCell>
      <TableCell align="left">{phone}</TableCell>
      <TableCell align="left">
        <strong>{`/${location.country}/`}</strong>
        <br />
        {`${location.city}`}
      </TableCell>
      <TableCell align="right">
        <Chip
          label={nationality}
          variant="default"
          color="primary"
          size="small"
        />
      </TableCell>
    </TableRow>
  );
}
export default UsersListItem;
