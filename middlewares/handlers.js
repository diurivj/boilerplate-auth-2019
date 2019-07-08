// Middleware for catching the errors with async await, without try and catch
exports.catchErrors = fn => (req, res, next) => fn(req, res, next).catch(next)
