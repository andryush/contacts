import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    width: "50%",
  },
});

function Statistics({ statistics, nationalities }) {
  const classes = useStyles();

  return (
    <Box mt={2}>
      <Paper>
        <Box m={2}>
          <h2>Statistics</h2>
        </Box>
        <Box className={classes.root}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Collection size</TableCell>
                <TableCell align="left">Males</TableCell>
                <TableCell align="left">Females</TableCell>
                <TableCell align="left">Indeterminate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="left">{statistics.size}</TableCell>
                <TableCell align="left">{statistics.male}</TableCell>
                <TableCell align="left">{statistics.female}</TableCell>
                <TableCell align="left">{statistics.indeterminate}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
        <Box className={classes.root} align="center">
          <span style={{ backgroundColor: "#FFE48D" }}>
            {statistics.predominate === "male"
              ? "Men predominate"
              : "Women predominate"}
          </span>
        </Box>
        <Box m={2}>
          <h3>Nationalities</h3>
          <Box display="flex" flexWrap="wrap" alignContent="space-between">
            {nationalities.map((el) => {
              return (
                <Box mr={5} mb={1} key={el.id}>
                  <strong>{el.nationality}</strong>
                  {`: ${el.count} contact`}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
export default Statistics;
