exports.paginateData = (data, page, limit) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
  
    return {
      totalRecords: data.length,
      page: parseInt(page),
      limit: parseInt(limit),
      totalPages: Math.ceil(data.length / limit),
      data: data.slice(startIndex, endIndex),
    };
  };
  