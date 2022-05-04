const mongoose = require("mongoose");

const collection_B = mongoose.Schema({
  name: {
    type: String,
  },
  class: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const Collection_B = new mongoose.model("collection_B", collection_B);
module.exports = Collection_B;