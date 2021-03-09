import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import Header from "../Header/Header";
import Filters from "../Filters/Filters";
import Users from "../Users/Users";
import Pagination from "../Pagination/Pagination";
import Statistics from "../Statistics/Statistics";

const lsViewType = localStorage.getItem("viewType");
const sortTypes = ["asc", "desc", "default"];

function App() {
  const [viewType, setViewType] = useState(
    lsViewType === null ? "listView" : lsViewType
  );
  const [refresh, setRefresh] = useState(true);
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
  const [sortBy, setSortBy] = useState("default");

  const updateViewType = (e, value) => {
    if (value !== null) {
      setViewType(value);
      localStorage.setItem("viewType", value);
    }
  };

  const updateRefresh = () => {
    setRefresh((prev) => !prev);
    setSortBy("default");
    setPage(1);
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
    setSortBy("default");
    setNameFilter(e.target.value);
  };

  const updateNationalityFilter = (e) => {
    setPage(1);
    setNameFilter("");
    setGenderFilter("");
    setSortBy("default");
    setNationalityFilter(e.target.value);
  };

  const updateGenderFilter = (e) => {
    setPage(1);
    setNameFilter("");
    setNationalityFilter("");
    setSortBy("default");
    setGenderFilter(e.target.value);
  };

  const resetFilters = () => {
    setPage(1);
    setNameFilter("");
    setNationalityFilter("");
    setGenderFilter("");
    setSortBy("default");
  };

  const updateStatistics = (stats) => {
    setStatistics(stats);
  };

  const updateNationalities = (data) => {
    setNationalities(data);
  };

  const updateSortBy = () => {
    let sort = "default";
    const sortTypeIndex = sortTypes.indexOf(sortBy);
    if (sortTypeIndex === 2) {
      sort = sortTypes[0];
    } else {
      sort = sortTypes[sortTypeIndex + 1];
    }
    setSortBy(sort);
  };

  return (
    <Box>
      <Header
        viewType={viewType}
        updateViewType={updateViewType}
        updateRefresh={updateRefresh}
      />
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
          <Users
            viewType={viewType}
            page={page}
            refresh={refresh}
            updateRefresh={updateRefresh}
            updateMaxPageCount={updateMaxPageCount}
            nameFilter={nameFilter}
            nationalityFilter={nationalityFilter}
            genderFilter={genderFilter}
            updateStatistics={updateStatistics}
            updateNationalities={updateNationalities}
            sortBy={sortBy}
            updateSortBy={updateSortBy}
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
