const mongoose = require("mongoose");
const validator = require("validator");
const bcrpyt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Please provide an email address"],
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, "Please provide a valid email address"]
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minLength: 8
  },
  confirmPassword: {
    type: String,
    required: [true, "Please confirm password"],
    validate: {
      validator: function (el) {
        return el == this.password;
      },
      message: "The passwords do not match"
    }
  }
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrpyt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

const User = mongoose.model("User", userSchema);
