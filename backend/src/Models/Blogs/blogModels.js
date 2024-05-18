import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlenght: 5,
    },
    title: {
        type: String,
        required: true,
        minlenght: 5,
    },
    description: {
        type: String,
        required: true,
        minlenght: 5,
    },
});

const Blog = mongoose.model("Blogs", blogSchema);
export default Blog;
