const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recomendSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    introduction: {
      type: String,
      required: true,
      maxlength: 50,
    },
    image: {
      type: String,
      required: false,
    },
    author: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Recomendedblog = mongoose.model("Recomendedblog", recomendSchema);

module.exports = Recomendedblog;
