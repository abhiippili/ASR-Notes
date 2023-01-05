const User = require("./../models/userModel");

exports.signup = async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  res.status(201).json({
    status: "success",
    data: {
      user: newUser
    }
  });
};
