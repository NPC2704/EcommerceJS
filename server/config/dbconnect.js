const { default: mongoose } = require("mongoose");
mongoose.set("strictQuery", false);
const DB_URL = "mongodb://127.0.0.1:27017/store";
const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(DB_URL);
    if (conn.connection.readyState === 1)
      console.log("DB connection is successfully!");
    else console.log("DB connecting");
  } catch (error) {
    console.log("DB connection is failed");
    throw new Error(error);
  }
};

module.exports = dbConnect;
