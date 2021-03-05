import React from "react";
import CardViewItem from "./CardViewItem/CardViewItem";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
  },
  paper: {
    margin: 10,
    padding: 10,
  },
}));

function CardView({ splitted, page }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
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
                <Grid item xs={6} key={login.uuid}>
                  <Paper className={classes.paper}>
                    <CardViewItem
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
                  </Paper>
                </Grid>
              );
            }
          )
        : null}
    </Grid>
  );
}
export default CardView;
