import React from "react";
import './style.scss'
export default function Pagination(props) {
  const { currentPage, limit, tasksList, handleSetCurrentPage } = props;
  const endPage = tasksList.length / limit;

  return (
    <div className="pagination">
      {currentPage !== 1 && (
        <button
          className="btn"
          onClick={() => handleSetCurrentPage(currentPage - 1)}
        >
          {"<"}
        </button>
      )}
      {currentPage - 1 > 0 && (
        <button
          className="btn"
          onClick={() => handleSetCurrentPage(currentPage - 1)}
        >
          {currentPage - 1}
        </button>
      )}
      <button className="btn btn--active">{currentPage}</button>
      {currentPage < endPage && (
        <button
          className="btn"
          onClick={() => handleSetCurrentPage(currentPage + 1)}
        >
          {currentPage + 1}
        </button>
      )}
      {currentPage < endPage && (
        <button
          className="btn"
          onClick={() => handleSetCurrentPage(currentPage + 1)}
        >
          {">"}
        </button>
      )}
    </div>
  );
}
