const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MutationSchema = new Schema(
  {
    status: {
      type: Number,
    },
    mutation: {
      type: Boolean,
    },
    DNA: {
      type: Array,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Mutation", MutationSchema);
