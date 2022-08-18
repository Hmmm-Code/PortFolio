const User = require("../models/userModel");

exports.getUser = (req, res, next) => {
  res.status(200).json({
    status: "sucess",
    requestAt: req.requestTime,
  });
  next();
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "sucess",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "something went wrong",
    });
  }
};
