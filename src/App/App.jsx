import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import Header from "../Header/Header";
import Filters from "../Filters/Filters";
import UsersList from "../UsersList/UsersList";

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
      <Container maxWidth="lg">
        <Filters />
        <UsersList />
      </Container>
    </Box>
  );
}
export default App;
