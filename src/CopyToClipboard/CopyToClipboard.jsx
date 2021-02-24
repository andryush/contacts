import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function CopyToClipboard() {
  const [open, setOpen] = React.useState(false);

  const handleClick = (e) => {
    // console.log(e.currentTarget.nextSibling.textContent);
    const copiedValue = e.currentTarget.nextSibling.textContent;
    navigator.clipboard.writeText(copiedValue);

    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <FileCopyOutlinedIcon fontSize="small" color="primary" />
      </IconButton>
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
}
export default CopyToClipboard;
