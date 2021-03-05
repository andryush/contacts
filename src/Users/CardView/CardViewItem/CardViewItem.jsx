import React from "react";
import Box from "@material-ui/core/Box";
import CopyToClipboard from "../../../CopyToClipboard/CopyToClipboard";
import Link from "@material-ui/core/Link";
import Chip from "@material-ui/core/Chip";

import { makeStyles } from "@material-ui/core/styles";

import { dateConverter, findNationality } from "../../../helpers/helpers";
import { countriesList } from "../../../helpers/countriesList";

const useStyles = makeStyles(() => ({
  info: {
    width: "100%",
    marginLeft: 30,
  },
  title: {
    fontWeight: 700,
  },
  nat: {
    display: "flex",
    justifyContent: "space-between",
  },
  badge: {
    borderRadius: 3,
  },
}));

function CardViewItem({
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
  const classes = useStyles();
  const date = dateConverter(dob.date);
  const nationality = findNationality(nat, countriesList);
  return (
    <Box display="flex">
      <div>
        <img
          src={picture}
          alt={name.first}
          style={{ height: "100%", padding: "5px" }}
        />
      </div>
      <div className={classes.info}>
        <div className={classes.nat}>
          <div>
            <span
              className={classes.title}
            >{`${name.title} ${name.first} ${name.last}`}</span>
          </div>
          <div>
            <Chip
              className={classes.badge}
              label={nationality}
              variant="default"
              color="primary"
              size="small"
            />
          </div>
        </div>
        <div>
          <span>Location: {`${location.country}, ${location.city}`}</span>
        </div>
        <div>
          <span>Birthday: {`${date} ${dob.age} years`}</span>
        </div>
        <Box display="flex" alignItems="center">
          <span>E-mail:&nbsp;</span>
          <CopyToClipboard />
          <Link href={`mailto:${email}`}>{email}</Link>
        </Box>
        <Box display="flex" alignItems="center">
          <span>Phone:&nbsp;</span>
          <CopyToClipboard />
          <Link href={`tel:${phone}`}>{phone}</Link>
        </Box>
      </div>
    </Box>
  );
}
export default CardViewItem;
