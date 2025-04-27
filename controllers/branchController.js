const fs = require('fs');
const path = require('path');
const { paginateData } = require('../utils/paginator');

// Reading branches.json
const branchesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/branches.json'))
);

exports.getBranches = (req, res) => {
  const { searchBy, searchValue, sortBy, sortOrder = 'asc', page = 1, limit = 10 } = req.query;

  let filteredData = [...branchesData];

  // Searching
  if (searchBy && searchValue) {
    filteredData = filteredData.filter(item =>
      item[searchBy]?.toString().toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  // Sorting
  if (sortBy) {
    filteredData.sort((a, b) => {
      const fieldA = a[sortBy];
      const fieldB = b[sortBy];
      if (fieldA < fieldB) return sortOrder === 'asc' ? -1 : 1;
      if (fieldA > fieldB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }

  // Pagination
  const paginatedResult = paginateData(filteredData, page, limit);

  res.json(paginatedResult);
};
