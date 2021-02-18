import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Header from "../Header/Header";

function App() {
  const [viewType, setViewType] = useState("listView");
  const changeViewType = (e, value) => {
    if (value !== null) {
      setViewType(value);
    }
  };

  return (
    <Box>
      <Header viewType={viewType} changeViewType={changeViewType} />
    </Box>
  );
}
export default App;
