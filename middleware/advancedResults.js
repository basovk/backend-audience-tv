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

  // create operators ($gt, $gte)
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`)

  // finding resource
  query = model.find(JSON.parse(queryStr))

  // Select fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ')

    query = query.select(fields)
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
      $and: [{ timeStart: { $lt: queryTime } }, { timeEnd: { $gt: queryTime } }]
    })
  }

  // Populate if needed
  if (populate) {
    query = query.populate(populate)
  }

  // executing query
  const results = await query

  res.advancedResults = {
    success: true,
    data: results
  }

  next()
}

export { advancedResults }
