import { ChangeEvent, useState } from "react";
import { PokemonListResponse, SortType } from "../types/pokemon";

const usePokemonList = (data: PokemonListResponse) => {
  const { results: sortedById } = data;
  const [sortType, setSortType] = useState(SortType.SORT_ID);
  const [sortedData, setSortedData] = useState(sortedById);

  const handleSelectSortType = (e: ChangeEvent<HTMLInputElement>) => {
    const selectType = e.target.value as SortType;
    setSortType(selectType);

    if (selectType === SortType.SORT_NAME) {
      const finalData = sortedData.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      setSortedData(finalData);
    } else {
      setSortedData(sortedById);
    }
    setCurrentPage(1);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(12);
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  const nPages = Math.ceil(sortedById.length / itemPerPage);

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
    handleSelectSortType,
    currentItems,
    handlePrevious,
    handleNext,
  };
};

export default usePokemonList;
