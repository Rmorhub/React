import React from 'react';

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
  itemPerPage,
}) => {
  const isPrevPageAvailable = totalItems % itemPerPage !== 0;
  const isNextPageAvailable = totalItems % itemPerPage === 0;
  const maxPage = Math.ceil(totalItems / itemPerPage);
  return (
    <div className="pagination">
      <button
        className="btn"
        onClick={goPrev}
        disabled={currentPage === 1 ? isPrevPageAvailable : false}
      >
        {currentPage === 1 ? '' : '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button
        className="btn"
        onClick={goNext}
        disabled={currentPage === maxPage ? isPrevPageAvailable : false}
      >
        {currentPage === maxPage ? '' : '→'}
      </button>
    </div>
  );
};

export default Pagination;
