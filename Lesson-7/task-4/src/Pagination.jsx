import React from 'react';

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
  itemPerPage,
}) => {
  const isPrevPageAvailable = 1;
  const isNextPageAvailable = Math.ceil(totalItems / itemPerPage);
  const nextArrow = currentPage === isNextPageAvailable ? '' : '→';
  const previousArrow = currentPage === isPrevPageAvailable ? '' : '←';
  return (
    <div className="pagination">
      <button
        className="btn"
        onClick={goPrev}
        disabled={currentPage <= isPrevPageAvailable}
      >
        {previousArrow}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button
        className="btn"
        onClick={goNext}
        disabled={currentPage >= isNextPageAvailable}
      >
        {nextArrow}
      </button>
    </div>
  );
};

export default Pagination;
