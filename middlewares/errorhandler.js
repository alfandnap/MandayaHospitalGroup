function errorHandler(err, req, res, next) {
  let status;
  let message;
  switch (err.name) {
      case 'NOTFOUND':
          status = 404;
          message = 'NOTFOUND';
          break;
      default:
          status = 500;
          message = 'Internal Server Error';
          break;
  }
  res.status(status).json({ message })
}

module.exports = errorHandler