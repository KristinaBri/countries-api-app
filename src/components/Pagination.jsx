import React from 'react'

const Pagination = ({ countriesPerPage, totalCountries }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <nav>
        <ul>
            {pageNumbers.map(number => (
                <li key={number}>
                    <a href="!#">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination