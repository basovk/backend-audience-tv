const advancedResults = (model, populate) => async (req, res, next) => {
  let query

  // copy of req.query
  const reqQuery = { ...req.query }

  // fields to exclude
  const removeFields = ['select', 'sort', 'page', 'limit', 'time']

  // loop over removeFields and delete them from reqQuery
  removeFields.forEach((param) => delete reqQuery[param])

  // Create query string
  let queryStr = JSON.stringify(reqQuery)

  // console.log(req.query)

  // console.log(queryStr)

  // create operators ($gt, $gte)
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`)

  // console.log(queryStr)

  // finding resource
  query = model.find(JSON.parse(queryStr))

  // Select fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ')
    // console.log(fields)
    query = query.select(fields)
    // console.log(query)
  }

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ')
    query = query.sort(sortBy)
  } else {
    query = query.sort('-createdAt')
  }

  // Show for the time
  if (req.query.time) {
    const queryTime = req.query.time
    query = query.find({
      //  $and: [
      //   { $nor: { usersWatched: { $size: 0 } } },
      // {
      $and: [{ timeStart: { $lt: queryTime } }, { timeEnd: { $gt: queryTime } }]
      // }
      //]
    })
  }

  // Pagination
  // const page = parseInt(req.query.page, 10) || 1
  // const limit = parseInt(req.query.limit, 10) || 25
  // const startIndex = (page - 1) * limit
  // const endIndex = page * limit
  // const total = await model.countDocuments()

  // query = query.skip(startIndex).limit(limit)

  // Populate if needed
  if (populate) {
    query = query.populate(populate)
  }

  // executing query
  const results = await query
  /*
  // Pagination result
  const pagination = {}

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit
    }
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit
    }
  }*/

  res.advancedResults = {
    success: true,
    // count: results.length,
    // pagination,
    data: results
  }

  next()
}

export { advancedResults }