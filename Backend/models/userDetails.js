const mongoose = require("mongoose");

const collection_A = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const Collection_A = new mongoose.model("collection_A", collection_A);
module.exports = Collection_A;