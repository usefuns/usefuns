import { useState } from "react";

const usePagination = (initialPage = 1, initialPageLimit = 10) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageLimit, setPageLimit] = useState(initialPageLimit);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const changePageLimit = (newLimit) => {
    setPageLimit(newLimit);
    setCurrentPage(1); 
  };

  return {
    currentPage,
    pageLimit,
    goToPage,
    changePageLimit,
  };
};

export default usePagination;
