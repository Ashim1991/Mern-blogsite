const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema(
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
      maxlength: 500,
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
    likes: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      enum: [
        "World",
        "Technology",
        "Business",
        "Culture",
        "Health",
        "Science",
        "Travel",
        "Politics",
        "Economy",
      ],
      default: "World",
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    MostRead: {
      type: Boolean,
      default: false,
    },
    isRecommended: {
      type: Boolean,
      default: false,
    },
    isRecent : {
      type: Boolean,
      default: false,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;
