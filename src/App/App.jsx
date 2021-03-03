import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import Header from "../Header/Header";
import Filters from "../Filters/Filters";
import UsersList from "../UsersList/UsersList";
import Pagination from "../Pagination/Pagination";
import Statistics from "../Statistics/Statistics";

function App() {
  const [viewType, setViewType] = useState("listView");
  const [page, setPage] = useState(1);
  const [maxPageCount, setMaxPageCount] = useState(null);
  const [nameFilter, setNameFilter] = useState("");
  const [nationalityFilter, setNationalityFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [statistics, setStatistics] = useState({
    size: 0,
    male: 0,
    female: 0,
    indeterminate: 0,
    predominate: "",
  });
  const [nationalities, setNationalities] = useState([]);

  const updateViewType = (e, value) => {
    if (value !== null) {
      setViewType(value);
    }
  };

  const updatePage = (e, page) => {
    setPage(page);
  };

  const updateMaxPageCount = (count) => {
    setMaxPageCount(Math.ceil(count));
  };

  const updateNameFilter = (e) => {
    setPage(1);
    setNationalityFilter("");
    setGenderFilter("");
    setNameFilter(e.target.value);
  };

  const updateNationalityFilter = (e) => {
    setPage(1);
    setNameFilter("");
    setGenderFilter("");
    setNationalityFilter(e.target.value);
  };

  const updateGenderFilter = (e) => {
    setPage(1);
    setNameFilter("");
    setNationalityFilter("");
    setGenderFilter(e.target.value);
  };

  const resetFilters = () => {
    setPage(1);
    setNameFilter("");
    setNationalityFilter("");
    setGenderFilter("");
  };

  const updateStatistics = (stats) => {
    setStatistics(stats);
  };

  const updateNationalities = (data) => {
    setNationalities(data);
  };

  return (
    <Box>
      <Header viewType={viewType} updateViewType={updateViewType} />
      <Container maxWidth="lg">
        <Filters
          nameFilter={nameFilter}
          updateNameFilter={updateNameFilter}
          nationalityFilter={nationalityFilter}
          updateNationalityFilter={updateNationalityFilter}
          genderFilter={genderFilter}
          updateGenderFilter={updateGenderFilter}
          resetFilters={resetFilters}
        />
        <Paper elevation={3}>
          <UsersList
            page={page}
            updateMaxPageCount={updateMaxPageCount}
            nameFilter={nameFilter}
            nationalityFilter={nationalityFilter}
            genderFilter={genderFilter}
            updateStatistics={updateStatistics}
            updateNationalities={updateNationalities}
          />
        </Paper>
        <Statistics statistics={statistics} nationalities={nationalities} />
        <Pagination
          page={page}
          updatePage={updatePage}
          maxPageCount={maxPageCount}
        />
      </Container>
    </Box>
  );
}
export default App;
