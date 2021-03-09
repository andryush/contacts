import React, { useState, useEffect } from "react";
import { findNationality } from "../helpers/helpers";
import { countriesList } from "../helpers/countriesList";
import ListView from "./ListView/ListView";
import CardView from "./CardView/CardView";
import Spinner from "../Spinner/Spinner";

function Users({
  page,
  updateMaxPageCount,
  nameFilter,
  nationalityFilter,
  genderFilter,
  updateStatistics,
  updateNationalities,
  viewType,
  refresh,
  updateRefresh,
  sortBy,
  updateSortBy,
}) {
  const [users, setUsers] = useState([]);
  const [splitted, setSplitted] = useState([]);
  const [loading, setLoading] = useState(false);

  const splitToArrays = (data) => {
    const size = 10;
    const result = [];
    for (let i = 0; i < data.length; i += size) {
      result.push(data.slice(i, i + size));
    }
    return result;
  };

  const calculateStats = (data) => {
    const size = data.length;
    const male = data.filter((el) => el.gender === "male").length;
    const female = data.filter((el) => el.gender === "female").length;
    const indeterminate = data.filter((el) => el.gender === "indeterminate")
      .length;
    const predominate = male > female ? "male" : "female";

    return {
      size: size,
      male: male,
      female: female,
      indeterminate: indeterminate,
      predominate: predominate,
    };
  };

  const calculateNats = (data) => {
    const sortedObject = {};
    const result = [];
    let id = 0;
    data.forEach((el) => {
      if (sortedObject[el] === undefined) {
        sortedObject[el] = 0;
      }
      sortedObject[el]++;
    });
    for (const key in sortedObject) {
      result.push({ id: id++, nationality: key, count: sortedObject[key] });
    }
    return result;
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await fetch("https://randomuser.me/api/?results=100")
        .then((response) => response.json())
        .catch((error) => console.log(error));
      setUsers(data.results);
      setLoading(false);
      updateStatistics(calculateStats(data.results));
      setSplitted(splitToArrays(data.results));
      const nats = data.results.map((el) =>
        findNationality(el.nat, countriesList)
      );
      updateNationalities(calculateNats(nats));
    };
    if (refresh) {
      getData();
      updateRefresh();
    }
  }, [refresh, updateRefresh, updateStatistics, updateNationalities]);

  useEffect(() => {
    updateMaxPageCount(splitted.length);
  }, [updateMaxPageCount, splitted]);

  useEffect(() => {
    const filtered = users.filter((el) => {
      return (
        el.name.first.toLowerCase().includes(nameFilter.toLowerCase()) ||
        el.name.last.toLowerCase().includes(nameFilter.toLowerCase())
      );
    });
    const splitted = splitToArrays(filtered);
    setSplitted(splitted);
  }, [nameFilter, users]);

  useEffect(() => {
    const filtered = users.filter((el) => {
      return findNationality(el.nat, countriesList)
        .toLowerCase()
        .includes(nationalityFilter.toLowerCase());
    });
    const splitted = splitToArrays(filtered);
    setSplitted(splitted);
  }, [nationalityFilter, users]);

  useEffect(() => {
    if (genderFilter.length > 0) {
      const filtered = users.filter((el) => {
        return el.gender.toLowerCase() === genderFilter.toLowerCase();
      });
      const splitted = splitToArrays(filtered);
      setSplitted(splitted);
    } else {
      setSplitted(splitToArrays(users));
    }
  }, [genderFilter, users]);

  useEffect(() => {
    let filtered = [];
    let usersCopy = [...users];
    if (sortBy === "asc") {
      filtered = usersCopy.sort((a, b) =>
        a.name.first.localeCompare(b.name.first)
      );
      setSplitted(splitToArrays(filtered));
    }
    if (sortBy === "desc") {
      filtered = usersCopy.sort((a, b) =>
        b.name.first.localeCompare(a.name.first)
      );
      setSplitted(splitToArrays(filtered));
    }
    if (sortBy === "default") {
      setSplitted(splitToArrays(users));
    }
  }, [sortBy, users]);

  return loading ? (
    <Spinner />
  ) : viewType === "listView" ? (
    <ListView
      splitted={splitted}
      page={page}
      updateSortBy={updateSortBy}
      sortBy={sortBy}
    />
  ) : (
    <CardView splitted={splitted} page={page} />
  );
}
export default Users;
