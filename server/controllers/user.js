const User = require("../models/user");
const asyncHandler = require("express-async-handler");
//khi dung asyncHandler thi se khong can pai try catcch
const register = asyncHandler(async (req, res) => {
  const { email, password, firstname, lastname } = req.body;
  if (!email || !password || !lastname || !firstname)
    return res.status(400).json({
      sucess: false,
      mes: "Missing inputs",
    });
  const respon = await User.create(req.body);
  return res.status(200).json({
    sucess: respon ? true : false,
    respon,
  });
});
module.exports = {
  register,
};
