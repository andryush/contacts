import React from "react";
import { default as MaterialPagination } from "@material-ui/lab/Pagination";
import Box from "@material-ui/core/Box";

function Pagination({ page, updatePage, maxPageCount }) {
  return (
    <Box display="flex" justifyContent="flex-end" mt={2} mb={2}>
      <MaterialPagination
        count={maxPageCount}
        color="primary"
        page={page}
        onChange={updatePage}
      />
    </Box>
  );
}
export default Pagination;
