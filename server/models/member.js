const { Schema, model } = require("mongoose");

const memberSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Member = model("Member", memberSchema);

module.exports = Member;
