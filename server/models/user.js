const mongoose = require("mongoose"); // Erase if already required
const bcrypt = require("bcrypt");
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    index: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  cart: {
    type: Array,
    default: [],
  },
  address: [{ type: mongoose.Types.ObjectId, ref: "Address" }],
  wishlist: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
  isBlocked: {
    type: Boolean,
    default: false,
  },
  refreshToken: {
    type: String,
  },
  passwordChangedAt: {
    type: String,
  },
  passwordResetToken: {
    type: String,
  },
  passwordResetExpires: {
    type: String,
  },
});

// ham nay dung de bam password ra
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    // next nay cu nhu pass qua
    next();
  }
  const salt = bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
});
//Export the model
module.exports = mongoose.model("User", userSchema);
