import { useState } from "react";
import { PokemonListResponse } from "../PokemonList";

export enum SortType {
    SORT_NAME = "sortName",
    SORT_ID = "sortID",
  }
  
const usePokemonList = (data: PokemonListResponse) => {
  const { results } = data;
  const sorted = [...results];
  const [sortType, setSortType] = useState(SortType.SORT_ID);
  const [sortedData, setSortedData] = useState(sorted);

  const handleSelectFilter = (e: any) => {
    const selectType = e.target.value;
    setSortType(selectType);

    if (selectType === "sortName") {
      const final = sortedData.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      setSortedData(final);
      setCurrentPage(1);
    } else {
      setSortedData(sorted);
      setCurrentPage(1);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(12);
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  const nPages = Math.ceil(results.length / itemPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < nPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return {
    currentPage,
    nPages,
    sortType,
    handleSelectFilter,
    currentItems,
    handlePrevious,
    handleNext,
  };
};

export default usePokemonList;
