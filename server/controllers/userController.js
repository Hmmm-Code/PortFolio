exports.getUser = (req, res, next) => {
  res.status(200).json({
    status: "sucess",
    requestAt: req.requestTime,
  });
  next();
};
