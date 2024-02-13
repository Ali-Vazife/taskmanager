const { customAPIError } = require('../errors/custom-error');

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof customAPIError) {
    return res.status(err.statusCode).json({ msg: err.msg })
  }
  return res.status(err.status).json({ msg: err.message })
}

module.exports = errorHandlerMiddleware;