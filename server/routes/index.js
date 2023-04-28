const userRouter = require("./user");
const { notFound, errHandler } = require("../middlewares/errHandler");
const initRoutes = (app) => {
  app.use("/api/user", userRouter);

  // neu o tren co loi thi se xuong day
  app.use(notFound);
  app.use(errHandler);
};

module.exports = initRoutes;
