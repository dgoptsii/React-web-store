import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination mt-4">
        {pageNumbers.map((number) => {
          if (number === currentPage) {
            return (
              <li key={number} className="page-item">
                <div
                  onClick={() => {
                    paginate(number);
                  }}
                  className="page-link text-warning "
                >
                  {number}
                </div>
              </li>
            );
          } else {
            return (
              <li key={number} className="page-item">
                <div
                  onClick={() => {
                    paginate(number);
                  }}
                  className="page-link text-secondary "
                >
                  {number}
                </div>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
