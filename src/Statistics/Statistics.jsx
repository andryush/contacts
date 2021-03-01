import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    width: "50%",
  },
});

function Statistics({ statsMale }) {
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
                <TableCell align="left">12</TableCell>
                <TableCell align="left">{statsMale}</TableCell>
                <TableCell align="left">4</TableCell>
                <TableCell align="left">0</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
        <Box className={classes.root} align="center">
          <span style={{ backgroundColor: "#FFE48D" }}>Men predominate</span>
        </Box>
      </Paper>
    </Box>
  );
}
export default Statistics;
