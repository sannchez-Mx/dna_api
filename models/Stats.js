const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    id: {
      type: Number,
    },
    count_mutations: {
      type: Number,
    },
    count_no_mutation: {
      type: Number,
    },
    ratio: {
      type: Number,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Data", DataSchema);