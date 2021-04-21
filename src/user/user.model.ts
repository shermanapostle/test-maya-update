import { Schema } from "mongoose";

const User = new Schema({
  username: {
    type: String,
    required: [true, "Username is required."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
  email: {
    type: String,
    required: [true, "email is required."],
    unique: true,
  },
});

export default { name: "User", schema: User };
